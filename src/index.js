import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home/App';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />  
      <Route path="/cadastro/video" component={CadastroVideo} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

