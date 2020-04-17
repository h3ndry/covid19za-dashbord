import React from 'react';
import Overview from './pages/overview';

import GlobalStyle from './styles/globalStyle';
import Banner from './components/banner';

const App = () => (
  <>
    <GlobalStyle />
    <Banner />
    <Overview />
  </>
);

export default App;
