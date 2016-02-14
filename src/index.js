import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Frame from './components/Frame';
import {reducer} from './reducer';
import {createStore} from 'redux';

export const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
      <Frame />
  </Provider>,
  document.getElementById('app')
);
