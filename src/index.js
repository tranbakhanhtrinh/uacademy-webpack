import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import courses from './store/reducers/courses';
import about from './store/reducers/about';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
    courses: courses,
    about: about
})

const store = createStore(rootReducer,applyMiddleware(thunk));

const app = (
    <Provider store={store}>
        <BrowserRouter basename="/">
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
