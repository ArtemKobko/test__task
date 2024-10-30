import { createGlobalStyle } from 'styled-components';
import { colors } from './variables';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

 body {
    font-family: 'Open Sans', sans-serif;
    background-color: ${colors.background};
    line-height: 1.5;
    color: ${colors.textPrimary}; 
  }

li {
    list-style-type: none;
}

button,
label,
a {
    cursor: pointer;
    border: none;
    padding: 0;
    transition: 0.3s;
}
`;

export default GlobalStyles;
