import React from 'react';
import {connect} from 'react-redux';
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
      type: 'SET_INPUT',
      input: event.target.value
    });
  },
  render: function() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.props.input}/>
        <button onClick={this.submitAnswer}> Enter </button>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    input: state.input
  };
}

export const FlashcardInputContainer = connect(mapStateToProps)(FlashcardInput);
