import React from 'react';
import Overview from './pages/overview';

import GlobalStyle from './styles/globalStyle';
import Banner from './components/banner';
import Nav from './components/nav';

const App = () => (
  <>
    <GlobalStyle />
    <Banner />
    <Nav />
    <Overview />
  </>
);

export default App;
