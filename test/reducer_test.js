import {expect} from 'chai';

import {reducer} from '../src/reducer';
import {INITIAL_STATE} from '../src/reducer';

describe('reducer', () => {

  it('handles SET_CARDS', () => {
    const initialState = INITIAL_STATE;
    const action = {
      type: 'SET_CARDS',
      cards: [
        ["Hello", "こんにちは"],
        ["Bye", "さようなら"]
      ]
    };
    const nextState = reducer(initialState, action);
    expect(nextState.cards).to.deep.equal([
      ["Hello", "こんにちは"],
      ["Bye", "さようなら"]
    ]);
  });

  it('handles GET_NEXT', () => {
    const initialState = {
      cards: [
        ["Hello", "こんにちは"],
        ["Bye", "さようなら"]
      ]
    };
    const action = {
      type: 'GET_NEXT'
    };
    const nextState = reducer(initialState, action);
    expect(nextState).to.deep.equal({
      cards: [
        ["Bye", "さようなら"]
      ],
      question: "Hello",
      answer: "こんにちは"
    });
  });

});