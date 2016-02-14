import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {FlashcardContainer} from './Flashcard';
import {FlashcardInput} from './FlashcardInput';
import style from '../style';
import {store} from '../index';

const bodyStyle = {
  position: 'absolute',
  left: 0,
  top: 100,
  bottom: 100,
  right: 0,
  backgroundColor: style.backgroundColor,
  overflowY: 'scroll'
};

export default React.createClass({
  mixins: [PureRenderMixin],
  loadCards: function() {
    store.dispatch({
      type: 'SET_CARDS',
      cards: [
        ['Hello', 'こんにちは'],
        ['Bye', 'さようなら']
      ]
    });

    store.dispatch({
      type:'GET_NEXT'
    });
  },
  componentWillMount: function() {
    this.loadCards();
  },
  render: function() {
    return (
      <div style={bodyStyle}>
        <FlashcardContainer />
        <FlashcardInput />
      </div>
    );
  }
});
