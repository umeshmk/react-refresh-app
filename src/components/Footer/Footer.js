import React from 'react';
import styled from 'styled-components';

// define body
const body = ({className, children}) => {
  return (
    <div className={className}>
      Made by <a href="https://github.com/umeshmk">Umesh Kadam</a> with ❤
      {children}
    </div>
  );
};

// add styles to body
const Footer = styled(body)`
  margin-top: 3rem;
  color: ${(props) => props.theme.color.primary || 'gray'};
  text-align: center;

  & a {
    padding-bottom: 0;
    color: ${(props) => props.theme.color.secondary || 'gray'};
    /* color: #aaa; */
  }
`;

export default Footer;
