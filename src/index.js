import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import courseName from './store/reducers/courses';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
    courseName: courseName
})

const store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
