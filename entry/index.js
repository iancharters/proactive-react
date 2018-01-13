/* global window */
import React from 'react';
import {render} from 'react-dom';
// import createHistory from 'history/createBrowserHistory';
// import store from '/store';
//
// import 'reset-css';
// import './global.css';

import Root from '../src/component/root';

render(
  <Root />,
  window.document.getElementById('app')
);
