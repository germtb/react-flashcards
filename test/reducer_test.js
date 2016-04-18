import {expect} from 'chai';

import {reducer} from '../src/reducer';
import {INITIAL_STATE} from '../src/reducer';

describe('reducer', () => {

  it('handles SET_CARDS', () => {
    const action = {
      type: 'SET_CARDS',
      cards: [
        ['Hello', 'こんにちは'],
        ['Bye', 'さようなら']
      ]
    };
    const nextState = reducer(INITIAL_STATE, action);
    expect(nextState.cards).to.deep.equal([
      ['Hello', 'こんにちは'],
      ['Bye', 'さようなら']
    ]);
  });

  it('handles GET_NEXT', () => {
    const initialState = Object.assign({}, INITIAL_STATE, {
      cards: [
        ['Hello', 'こんにちは'],
        ['Bye', 'さようなら']
      ]
    });
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
    const initialState = Object.assign({}, INITIAL_STATE, {
      question: 'Hello',
      answer: 'こんにちは',
      input: 'こんにちは',
    });
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
    const initialState = Object.assign({}, INITIAL_STATE, {
      question: 'Hello',
      answer: 'こんにちは',
      input: 'さようなら',
    });
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
    const action = {
      type: 'SET_INPUT',
      input: 'unicorns'
    };
    const nextState = reducer(INITIAL_STATE, action);
    expect(nextState.input).to.equal('unicorns');
  });

  it('handles SET_MENU', () => {
    const action = {
      type: 'SET_MENU',
      menu: 1
    };
    const nextState = reducer(INITIAL_STATE, action);
    expect(nextState.menu).to.equal(1);
  });

  it('handles ADD_DECK', () => {
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
    const nextState = reducer(INITIAL_STATE, action);
    console.log(nextState);
    expect(nextState.decks[0]).to.deep.equal({
      cards: [
        ['Hello', 'こんにちは'],
        ['Bye', 'さようなら']
      ],
      name: 'Simple words'
    });
  });

  it('handles SELECT_DECK', () => {
    const action = {
      type: 'SELECT_DECK',
      deckId: 'Some deck',
    };
    const nextState = reducer(INITIAL_STATE, action);
    expect(nextState.selectedDeck).to.equal('Some deck');
  });

});