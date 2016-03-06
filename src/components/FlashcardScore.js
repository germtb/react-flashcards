import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {store} from '../index';

const style = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '75',
};

export const FlashcardScore = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    const correctAnswers = this.props.correctAnswers.length;
    const totalAnswers = this.props.wrongAnswers.length + correctAnswers;
    return (
      <div style={style}> {correctAnswers.toString() + '/' + totalAnswers.toString()} </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    correctAnswers: state.correctAnswers,
    wrongAnswers: state.wrongAnswers
  };
}

export const FlashcardScoreContainer = connect(mapStateToProps)(FlashcardScore);
