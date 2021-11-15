import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HtmpPage from './html_page';

export default () => {
  return <div>
    <Switch>
      <Route path="/" component={HtmpPage} />
    </Switch>
  </div>
};
