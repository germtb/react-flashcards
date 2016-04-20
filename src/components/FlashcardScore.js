import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const style = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '75',
};

const FlashcardScore = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    const correctAnswers = this.props.correctAnswers.length;
    const totalAnswers = this.props.wrongAnswers.length + correctAnswers;
    return (
      <div style={style}> {correctAnswers.toString() + '/' + totalAnswers.toString()} </div>
    );
  }
});

export const FlashcardScoreContainer = connect(s => {return {
  correctAnswers: s.correctAnswers,
  wrongAnswers: s.wrongAnswers
};})(FlashcardScore);
