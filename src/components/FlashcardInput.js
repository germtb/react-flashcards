import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {store} from '../index';

const outerDivStyle = {
  display: "flex",
  justifyContent: "center"
};

const inputStyle = {
  "float": "left",
  "width": "300px",
  "height": "60px",
  "fontSize": "25",
};

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
  handleKeyDown: function(event) {
    if (event.keyCode === 13) {
      this.submitAnswer();
    }
  },
  handleChange: function(event) {
    store.dispatch({
      type: 'SET_INPUT',
      input: event.target.value
    });
  },
  render: function() {
    return (
      <div style={outerDivStyle}>
          <input style={inputStyle} onKeyDown={this.handleKeyDown} onChange={this.handleChange} value={this.props.input} autoFocus={true}/>
      </div>
    );
  }
});

export const FlashcardInputContainer = connect(s => {return {input: s.input}})(FlashcardInput);
