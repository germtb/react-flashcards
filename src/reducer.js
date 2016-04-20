import {tail,head} from 'ramda';

export const INITIAL_STATE = {
  correctAnswers: [],
  wrongAnswers: [],
  menu: 0,
  decks: {},
  selectedDeck: ''
};

const setCards = function(state, cards) {
  return Object.assign({}, state, {
    cards: cards
  });
};

const getNext = function(state) {
  if (state.cards.length === 0) {
    return Object.assign({}, state);
  }
  return Object.assign({}, state, {
    cards: tail(state.cards),
    question: head(state.cards)[0],
    answer: head(state.cards)[1]
  });
};

const submitAnswer = function(state) {
  return state.input === state.answer ? submitCorrectAnswer(state) : submitWrongAnswer(state);
};

const submitCorrectAnswer = function(state) {
  return Object.assign({}, state, {
    correctAnswers: [...state.correctAnswers, [state.question, state.answer]],
    question: undefined,
    answer: undefined,
    input: undefined
  });
};

const submitWrongAnswer = function(state) {
  return Object.assign({}, state, {
    wrongAnswers: [...state.wrongAnswers, [state.question, state.answer]],
    question: undefined,
    answer: undefined,
    input: undefined
  });
};

const setInput = function(state, input) {
  return Object.assign({}, state, {
    input: input
  });
};

const setMenu = function(state, menu) {
  return Object.assign({}, state, {
    menu: menu
  });
};

const addDeck = function(state, deck) {
  return Object.assign({}, state, {
    decks: [...state.decks, deck]
  });
};

const selectDeck = function(state, deckName) {
  return Object.assign({}, state, {
    selectedDeck: deckName
  });
};

export const reducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_CARDS':
    return setCards(state, action.cards);
  case 'GET_NEXT':
    return getNext(state);
  case 'SUBMIT_ANSWER':
    return submitAnswer(state);
  case 'SET_INPUT':
    return setInput(state, action.input);
  case 'RESET':
    return INITIAL_STATE;
  case 'SET_MENU':
    return setMenu(state, action.menu);
  case 'ADD_DECK':
    return addDeck(state, action.deck);
  case 'SELECT_DECK':
    return selectDeck(state, action.deckName);
  default:
    return state;
  }
};
