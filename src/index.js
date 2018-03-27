import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Link, Route, Switch } from 'react-router-dom'

ReactDOM.render(<HashRouter><App /></HashRouter>, document.getElementById('root'));
registerServiceWorker();
