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

const outerDivButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const buttonStyle = {
  fontSize: '30'
}

export const Body = React.createClass({
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
      <div style={bodyStyle}>
        {this.props.question === undefined ? result : nextCard}
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    question: state.question,
    wrongAnswers: state.wrongAnswers
  };
}

export const BodyContainer = connect(mapStateToProps)(Body);
