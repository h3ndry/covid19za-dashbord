import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg-color: #212429;
  --forgroud-color: #2a2d32;
  --red-color: #ff808b;
  --text-color: rgba(255, 255, 255, .85);
  --bg-hover-color: rgba(195, 196, 219, 0.05)
}

html {
  font-size: 16px;
}

body {
  background-color: var(--bg-color);
  color: #fcfcfb;
  padding: 4rem 2rem 2rem 2rem;
  font-family: 'Montserrat', sans-serif;
}

`;
