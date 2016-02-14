import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {store} from '../index';

export const FlashcardInput = React.createClass({
  mixins: [PureRenderMixin],
  submitAnswer: function() {
    store.dispatch({
      type: 'SUBMIT_ANSWER'
    });
    store.dispatch({
      type: 'GET_NEXT',
    });
  },
  handleChange: function (event) {
    store.dispatch({
      type: 'SUBMIT_ANSWER',
      input: event.target.value
    });
  },
  render: function() {
    return (
      <div>
        <input onChange={this.handleChange}/>
        <button onClick={this.submitAnswer}> Enter </button>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    question: state.question
  }
}
