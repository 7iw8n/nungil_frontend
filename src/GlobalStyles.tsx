// GlobalStyles.js
import { Global, css } from '@emotion/react';
import normalize from 'emotion-normalize';

const GlobalStyles = () => (
  <Global
    styles={css`
      ${normalize}

      /* @font-face {
        font-family: ;
        src: url();
      } */

      * {
        box-sizing: border-box;
      }

      html {
        font-size: 62.5%;
      }
      button {
        cursor: pointer;
        background-color: none;
        border: none;
      }
    `}
  />
);

export default GlobalStyles;
