import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalStyle from './styles/globalStyle';
import Banner from './components/banner';
import Layout from './styles/layout'
import Nav from './components/nav';

import Overview from './pages/overview';
import ProvPage from './pages/provPage';
import PageNotFound from './pages/404';


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
