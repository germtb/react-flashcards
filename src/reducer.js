import R from 'ramda';

export const INITIAL_STATE = {
  correctAnswers: [],
  wrongAnswers: []
};

const setCards = function(state, cards) {
  return Object.assign({}, state, {
    cards: cards
  });
}

const getNext = function(state) {
  if (state.cards.length === 0) {
    return Object.assign({}, state);
  }
  return Object.assign({}, state, {
    cards: R.tail(state.cards),
    question: R.head(state.cards)[0],
    answer: R.head(state.cards)[1]
  });
}

const submitAnswer = function(state) {
  return state.input === state.answer ? submitCorrectAnswer(state) : submitWrongAnswer(state);
}

const submitCorrectAnswer = function(state) {
  return Object.assign({}, state, {
    correctAnswers: [...state.correctAnswers, [state.question, state.answer]],
    question: undefined,
    answer: undefined,
    input: undefined
  });
}

const submitWrongAnswer = function(state) {
  return Object.assign({}, state, {
    wrongAnswers: [...state.wrongAnswers, [state.question, state.answer]],
    question: undefined,
    answer: undefined,
    input: undefined
  });
}

const setInput = function(state, input) {
  return Object.assign({}, state, {
    input: input
  });
}

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
  default:
    return state;
  }
}
