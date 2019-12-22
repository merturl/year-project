import React from 'react';
import { Switch, Route } from 'react-router-dom';


import { PAGE_PATHS } from './constants';
import HomePage from './pages/Homepage';

const App: React.FC<{}> = () => {
  return (
    <Switch>
      <Route exact path={PAGE_PATHS.HOME} component={HomePage}/>
    </Switch>
  )
}

export default React.memo(App);
