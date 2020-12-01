import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/index.jsx';
import store from './createStore';

ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


