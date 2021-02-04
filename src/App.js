import React from 'react';
import Styles from './App.scss';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <div className={Styles.container}>
        <div>
          <img src="img/logo512.png" alt="Logo react" />
        </div>
        <div>
          <h1>React From Scratch</h1>
          <h3>
            Use this project as your starting point for any react projects.
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
