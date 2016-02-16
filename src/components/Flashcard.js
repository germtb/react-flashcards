import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const outerDivStyle = {
  display: "flex",
  justifyContent: "center"
};

const style = {
  "fontSize": "75",
}

export const Flashcard = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div style={outerDivStyle}>
        <div style={style}> {this.props.question} </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    question: state.question
  };
}

export const FlashcardContainer = connect(mapStateToProps)(Flashcard);
