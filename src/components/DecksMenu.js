import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {FlashcardMenuContainer} from './FlashcardMenu';
import {connect} from 'react-redux';
import style from '../style';

export const Decks = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    const decks = this.props.decks.map(d => (<Deck cards={d}/>));
    return (<div {decks} </div>);
  }
  }
});

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

export const DecksContainer = connect(mapStateToProps)(Decks);
