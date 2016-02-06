export const INITIAL_STATE = {};
import R from 'ramda';

// Object.prototype.update = function(key, value) {
//   return R.set(R.lensProp(key), value, this);
// };

const setCards = function(state, cards) {
  state.cards = cards;
  return state;
}

const getNext = function(state) {
  const nextCard = R.take(1, state.cards)[0];
  const cards = R.drop(1, state.cards);
  const question = nextCard[0];
  const answer = nextCard[1];
  state.question = question;
  state.answer = answer;
  state.cards = cards;
  return state;
}

export const reducer = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CARDS':
      return setCards(state, action.cards);
    case 'GET_NEXT':
      return getNext(state);
    default:
      return state;
  }
}
