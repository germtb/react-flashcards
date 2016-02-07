import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {FlashcardContainer} from './Flashcard';
import {FlashcardInput} from './FlashcardInput';
import style from '../style';

const bodyStyle = {
  position: "absolute",
  left: 0,
  top: 100,
  bottom: 100,
  right: 0,
  backgroundColor: style.backgroundColor,
  overflowY: "scroll"
};

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div style={bodyStyle}>
        <FlashcardContainer />
        <FlashcardInput />
      </div>
    );
  }
});
