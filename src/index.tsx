import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Views from 'views';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Views />,
  document.getElementById('root'),
);
serviceWorker.unregister();
