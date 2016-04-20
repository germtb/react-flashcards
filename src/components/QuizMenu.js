import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {FlashcardContainer} from './Flashcard';
import {FlashcardInputContainer} from './FlashcardInput';
import {FlashcardScoreContainer} from './FlashcardScore';
import {connect} from 'react-redux';
import style from '../style';
import {store} from '../index';

const quizMenuStyle = {
  position: 'absolute',
  left: 0,
  top: 100,
  bottom: 100,
  right: 0,
  backgroundColor: style.backgroundColor,
  overflowY: 'scroll'
};

const outerDivButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const buttonStyle = {
  fontSize: '30'
};

const QuizMenu = React.createClass({
  mixins: [PureRenderMixin],
  tryAgain: function() {
    store.dispatch({
      type:'RESET'
    });
    store.dispatch({
      type: 'SET_CARDS',
      cards: this.props.wrongAnswers
    });
    store.dispatch({
      type:'GET_NEXT'
    });
  },
  render: function() {
    const nextCard = (
      <div>
        <FlashcardContainer />
        <FlashcardInputContainer />
      </div>
    );
    const result = (
      <div>
        <FlashcardScoreContainer />
        <div style={outerDivButtonStyle}>
          <button style={buttonStyle} onClick={this.tryAgain}> Try again </button>
        </div>
      </div>
    );
    return (
      <div style={quizMenuStyle}>
        {this.props.question === undefined ? result : nextCard}
      </div>
    );
  }
});

export const QuizMenuContainer = connect(s => {return {
  question:s.question,
  wrongAnswers: s.wrongAnswers
};})(QuizMenu);
