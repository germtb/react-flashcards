import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

var answer = '';

export const FlashcardInput = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div>
        <input onChange={i => answer = i}/>
        <button type="button"> Enter </button>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    question: state.question
  }
}
