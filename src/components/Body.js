import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Flashcard from './Flashcard';
import FlashcardInput from './FlashcardInput';

const bodyStyle = {
  position: "absolute",
  left: 0,
  top: 100,
  bottom: 100,
  right: 0,
  backgroundColor: "blue",
  overflowY: "scroll"
};

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div style={bodyStyle}>
        <Flashcard />
        <FlashcardInput />
      </div>
    );
  }
});
