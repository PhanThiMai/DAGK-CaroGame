import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore } from 'redux'
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'
import './api/axios.config'

require('dotenv').config()

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}> <App /></Provider>,
    document.getElementById('root'));


serviceWorker.unregister();
