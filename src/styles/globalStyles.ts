import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const globalStyles = css`
  ${emotionNormalize}

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  ul,
  li {
    list-style: none;
    padding: 0;
  }
  html {
    font-size: 62.5%;
  }
  button {
    cursor: pointer;
    border: none;
    background: none;
  }
  a {
    text-decoration: none;
  }
  input {
    border: none;
    outline: none;
  }
`;

export default globalStyles;
