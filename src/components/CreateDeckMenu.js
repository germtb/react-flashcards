import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import style from '../style';

const decksMenuStyle = {
  position: 'absolute',
  left: 0,
  top: 100,
  bottom: 100,
  right: 0,
  backgroundColor: style.backgroundColor,
  overflowY: 'scroll'
};

const newFlashcardLeftInputStyle = {
};

const newFlashcardRightInputStyle = {
};

const addFlashcardButtonStyle = {
  fontSize: '30',
  width: '400'
};

const createDeckButtonStyle = {
  fontSize: '30',
  width: '400'
};

export const CreateDeckMenu = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    const newFlashcards = [];
    for (let i = 0; i < this.props.flashcardsCount; i++) {
      newFlashcards.push((<NewFlashcard key={i}/>));
    }

    return (
      <div style={decksMenuStyle}>
        {newFlashcards}
        <NewFlashcard/>
        <div>
          <button style={addFlashcardButtonStyle}> Add another flashcard </button>
        </div>
        <div>
          <button style={createDeckButtonStyle}> Create deck </button>
        </div>
      </div>
    );
  }
});

const NewFlashcard = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div>
        <input style={newFlashcardLeftInputStyle}/> <input style={newFlashcardRightInputStyle}/>
      </div>
    );
  }
});
