import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';


import '../assets/stylesheets/application.scss';
import carsReducer from './reducers/carsReducer.jsx'
import CarsIndex from './containers/carsIndex.jsx'
import CarsNew from './containers/carsNew.jsx'
import CarsShow from './containers/carsShow.jsx'
import { reducer as formReducer } from 'redux-form';


// const garageName = `garage${Math.floor(10 + (Math.random() * 90))}`; // prompt("What is your garage?") ||
const garageName = 'dimitri'; // prompt("What is your garage?") ||
const initialState = {
  garage: garageName,
  cars: []
};

const reducers = combineReducers({
  garage: (state = null, action) => state,
  cars: carsReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, composeWithDevTools(middlewares))}>
    <Router history={history}>
        <Switch>
          <Route path="/" exact component={CarsIndex} />
          <Route path="/cars/new" exact component={CarsNew} />
          <Route path="/cars/:id" exact component={CarsShow} />
        </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
