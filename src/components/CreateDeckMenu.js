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

const outerDivStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const deckNameStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const newFlashcardLeftInputStyle = {
  left: 0
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
        <input style={deckNameStyle} placeholder="Deck name"/>
        {newFlashcards}
        <NewFlashcardInput/>
        <div style={outerDivStyle}>
          <button style={addFlashcardButtonStyle}> Add another flashcard </button>
        </div>
        <div style={outerDivStyle}>
          <button style={createDeckButtonStyle}> Create deck </button>
        </div>
      </div>
    );
  }
});

const NewFlashcardInput = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div style={outerDivStyle}>
        <input style={newFlashcardLeftInputStyle}/> <input style={newFlashcardRightInputStyle}/>
      </div>
    );
  }
});

const NewFlashcard = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div style={outerDivStyle}>
        <div style={newFlashcardLeftInputStyle}> Left </div> <div style={newFlashcardRightInputStyle}> Right </div>
      </div>
    );
  }
});
