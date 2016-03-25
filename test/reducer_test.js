import {expect} from 'chai';

import {reducer} from '../src/reducer';
import {INITIAL_STATE} from '../src/reducer';

describe('reducer', () => {

  it('handles SET_CARDS', () => {
    const initialState = INITIAL_STATE;
    const action = {
      type: 'SET_CARDS',
      cards: [
        ['Hello', 'こんにちは'],
        ['Bye', 'さようなら']
      ]
    };
    const nextState = reducer(initialState, action);
    expect(nextState.cards).to.deep.equal([
      ['Hello', 'こんにちは'],
      ['Bye', 'さようなら']
    ]);
  });

  it('handles GET_NEXT', () => {
    const initialState = INITIAL_STATE;
    initialState.cards = [
        ['Hello', 'こんにちは'],
        ['Bye', 'さようなら']
    ];
    const action = {
      type: 'GET_NEXT'
    };
    const nextState = reducer(initialState, action);
    expect(nextState.cards).to.deep.equal([
      ['Bye', 'さようなら']
    ]);
    expect(nextState.question).to.equal('Hello');
  });

  it('handles correct SUBMIT_ANSWER', () => {
    const initialState = INITIAL_STATE;
    initialState.question = 'Hello';
    initialState.answer = 'こんにちは';
    initialState.input = 'こんにちは';
    const action = {
      type: 'SUBMIT_ANSWER'
    };
    const nextState = reducer(initialState, action);
    expect(nextState.correctAnswers).to.deep.equal([
      ['Hello', 'こんにちは']
    ]);
    expect(nextState.question).to.equal(undefined);
    expect(nextState.answer).to.equal(undefined);
    expect(nextState.input).to.equal(undefined);
  });

  it('handles wrong SUBMIT_ANSWER', () => {
    const initialState = INITIAL_STATE;
    initialState.question = 'Hello';
    initialState.answer = 'こんにちは';
    initialState.input = 'さようなら';
    const action = {
      type: 'SUBMIT_ANSWER'
    };
    const nextState = reducer(initialState, action);
    expect(nextState.wrongAnswers).to.deep.equal([
      ['Hello', 'こんにちは']
    ]);
    expect(nextState.question).to.equal(undefined);
    expect(nextState.answer).to.equal(undefined);
    expect(nextState.input).to.equal(undefined);
  });

  it('handles SET_INPUT', () => {
    const initialState = INITIAL_STATE;
    const action = {
      type: 'SET_INPUT',
      input: 'unicorns'
    };
    const nextState = reducer(initialState, action);
    expect(nextState.input).to.equal('unicorns');
  });

  it('handles SET_MENU', () => {
    const initialState = INITIAL_STATE;
    const action = {
      type: 'SET_MENU',
      menu: 1
    };
    const nextState = reducer(initialState, action);
    expect(nextState.menu).to.equal(1);
  });

  it('handles ADD_DECK', () => {
    const initialState = INITIAL_STATE;
    const deck = {
      cards: [
        ['Hello', 'こんにちは'],
        ['Bye', 'さようなら']
      ],
      name: 'Simple words'
    };
    const action = {
      type: 'ADD_DECK',
      deck: deck
    };
    const nextState = reducer(initialState, action);
    expect(nextState.decks[0]).to.deep.equal({
      cards: [
        ['Hello', 'こんにちは'],
        ['Bye', 'さようなら']
      ],
      name: 'Simple words'
    });
  });

});