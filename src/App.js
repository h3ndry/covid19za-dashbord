import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';
import Banner from './components/banner';
import Nav from './components/nav';

//Pages
import Overview from './pages/overview';
import ProvPage from './pages/provPage';
import PageNotFound from './pages/404';

import Layout from './styles/layout';

const App = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Banner />
      <Nav />
      <Switch>
        <Route path="/" exact component={Overview} />
        <Route path="/provincial" component={ProvPage} />
        <Route component={PageNotFound} />
      </Switch>
    </Layout>
  </>
);

export default App;
