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

store.dispatch({
  type: 'SET_CARDS',
  cards: [
    ['Hello', 'こんにちは'],
    ['Bye', 'さようなら'],
    ['Caca', 'Unicornio'],
    ['Culo', 'Caca zafiro'],
    ['Pedo', 'さようなら'],
    ['Pis', 'さようなら'],
  ]
});

store.dispatch({
  type:'GET_NEXT'
});

for (let i = 0; i < 4; i++) {
  store.dispatch({
    type: 'ADD_DECK',
    deck: {
      cards: [
        ['Hello', 'こんにちは'],
        ['Bye', 'さようなら'],
        ['Caca', 'Unicornio'],
        ['Culo', 'Caca zafiro'],
        ['Pedo', 'さようなら'],
        ['Pis', 'さようなら'],
      ],
      name: i
    }
  });
}
