import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Motion, spring} from 'react-motion';

const style = {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '75',
}

export const Flashcard = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div style={style}> {this.props.question} </div>
    );
  }
});

export const FlashcardContainer = connect(s => {return {question:s.question}})(Flashcard);
