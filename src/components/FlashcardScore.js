import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {store} from '../index';

export const FlashcardScore = React.createClass({
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
    const correctAnswers = this.props.correctAnswers.length;
    const totalAnswers = this.props.wrongAnswers.length + correctAnswers;
    return (
      <div>
        <div> {'You got: ' + correctAnswers.toString() + '/' + totalAnswers.toString()} </div>
        <button onClick={this.tryAgain}> Try again </button>
      </div>);
  }
});

function mapStateToProps(state) {
  return {
    correctAnswers: state.correctAnswers,
    wrongAnswers: state.wrongAnswers
  };
}

export const FlashcardScoreContainer = connect(mapStateToProps)(FlashcardScore);
