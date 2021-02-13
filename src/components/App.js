import React, {useState} from 'react';
import Styles from './App.css';
import Logo from './logo.png';

import theme from './Themes/global';
import Button from './Elements/Button';
import Footer from './Footer/Footer';
import {ThemeProvider} from 'styled-components';

const App = () => {
  const [state, setState] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <div>
        <div className={Styles.container}>
          <div>
            <img src={Logo} alt="Logo react" />
            {/* if image is from "public/images" folder */}
            {/* <img src="images/logo512.png" alt="Logo react" /> */}
          </div>
          <form>
            <input
              type="text"
              value={state}
              placeholder="Start Typing....."
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
          </form>
          <div>
            <h1>React Refresh App</h1>
            <h3>
              Use this project as your starting point for any react projects.
            </h3>
            <Button primary>Styled components</Button>
          </div>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
