import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import LoginControl from './LoginControl.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<LoginControl />, document.getElementById('login')
);
