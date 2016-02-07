import R from 'ramda';

export const INITIAL_STATE = {
  correctAnswers: [],
  wrongAnswers: []
};

const setCards = function(state, cards) {
  state.cards = cards;
  return state;
}

const getNext = function(state) {
  const nextCard = R.head(state.cards);
  state.cards = R.tail(state.cards);
  state.question = nextCard[0];
  state.answer = nextCard[1];
  return state;
}

const submitAnswer = function(state, answer) {
  return answer === state.answer ? submitCorrectAnswer(state) : submitWrongAnswer(state);
}

const submitCorrectAnswer = function(state) {
  state.correctAnswers.push([state.question, state.answer]);
  state.question = undefined;
  state.answer = undefined;
  return state;
}

const submitWrongAnswer = function(state) {
  state.wrongAnswers.push([state.question, state.answer]);
  state.question = undefined;
  state.answer = undefined;
  return state;
}

export const reducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CARDS':
      return setCards(state, action.cards);
    case 'GET_NEXT':
      return getNext(state);
    case 'SUBMIT_ANSWER':
      return submitAnswer(state, action.answer);
    default:
      return state;
  }
}
