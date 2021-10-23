import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TemplatesPage from'./templates';
import GoodsDetailsPage from './goods_details';
import './App.scss';

export default () => {
  return (
    <div>
      <Switch>
        <Route path="/template" component={TemplatesPage} />
        <Route path="/" component={GoodsDetailsPage} />
      </Switch>
    </div>
  )
}
