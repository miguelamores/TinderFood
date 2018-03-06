/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Home from './containers/CardContainer';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { getFood } from './actions/actions';

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
    );

store.dispatch(getFood());

export default class App extends Component {
  render() {
      return (
          <Provider store={store}>
              <Home />
          </Provider>
      );
  }
}