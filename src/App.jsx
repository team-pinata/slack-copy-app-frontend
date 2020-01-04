import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LoadingPage from '~/components/pages/LoadingPage';

const { lazy, Suspense } = React;
const IndexPage = lazy(() => import('~/components/pages/IndexPage'));
const AboutPage = lazy(() => import('~/components/pages/AboutPage'));

const App = () => (
  <Router>
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/about" component={AboutPage} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
