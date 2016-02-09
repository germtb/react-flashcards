import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const Flashcard = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (<div> {this.props.question} </div>);
  }
});

function mapStateToProps(state) {
  return {
    question: state.question,
  }
}

export const FlashcardContainer = connect(mapStateToProps)(Flashcard);
