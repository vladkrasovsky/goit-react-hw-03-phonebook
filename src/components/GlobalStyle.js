import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  button {
    font-size: 14px;

    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 5px;

    user-select: none;
    cursor: pointer;

    transition: 200ms ease;
    transition-property: background-color, border-color, color;

    :hover,
    :focus,
    :active {
      background-color: #ff6b08;
      border-color: #ff6b08;
      color: white;
    }
  }

  input {
    border: 1px solid lightgray;
  }

  label > span {
    display: block;
  }
`;
