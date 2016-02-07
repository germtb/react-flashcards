import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Frame from './components/Frame';
import {reducer} from './reducer';
import {createStore} from 'redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
      <Frame />
  </Provider>,
  document.getElementById('app')
);

store.dispatch({
  type: 'SET_CARDS',
  cards: [
    ["Hello", "こんにちは"],
    ["Bye", "さようなら"]
  ]
});

store.dispatch({
  type:'GET_NEXT'
});
