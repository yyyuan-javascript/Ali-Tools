import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import TemplatesPage from'./templates';
import GoodsDetailsPage from './goods_details';
import './App.scss';

export default () => (
  <div>
    <Switch>
      <Route path="/template" component={TemplatesPage} />
      <Route path="/goodsDetail" component={GoodsDetailsPage} />
    </Switch>  
  </div>
  );