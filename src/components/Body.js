import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {FlashcardContainer} from './Flashcard';
import {FlashcardInputContainer} from './FlashcardInput';
import {connect} from 'react-redux';
import {FlashcardScoreContainer} from './FlashcardScore';
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

export const Body = React.createClass({
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
    const nextCard = (
      <div>
        <FlashcardContainer />
        <FlashcardInputContainer />
      </div>
    );
    const result = (
        <FlashcardScoreContainer />
    );
    return (
      <div style={bodyStyle}>
        {this.props.question === undefined ? result : nextCard}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    question: state.question
  };
}

export const BodyContainer = connect(mapStateToProps)(Body);
