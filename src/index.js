import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Login from './js/Login';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

import Friends from './js/Friends'
import Timer from './js/Timer'


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Switch>
    {/* <Route path='/test' component={Login}></Route>
    <Route path='/' component={Login}></Route>
    <Route path='/friends' component={Friends}></Route>
    <Route path='/filterr/:filterr' component={Friends}></Route> */}
    <Route path='/timer' component={Timer}></Route>
  </Switch>
  </BrowserRouter>
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
