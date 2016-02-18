import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Motion, spring} from 'react-motion';

const outerDivStyle = {
  display: "flex",
  justifyContent: "center",
  WebkitTransform: "translate3d(${x}px, 0, 0)",
  transform: "translate3d(${x}px, 0, 0)",
};

const style = {
  "fontSize": "75",
}

export const Flashcard = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <Motion style={{x: spring(this.props.question ? 400 : 0)}}>
          {({x}) =>
            <div style={outerDivStyle}>
              <div style={style}> {this.props.question} </div>
            </div>
          }
        </Motion>
    );
  }
});

function mapStateToProps(state) {
  return {
    question: state.question
  };
}

export const FlashcardContainer = connect(mapStateToProps)(Flashcard);
