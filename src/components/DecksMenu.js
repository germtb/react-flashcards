import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {FlashcardMenuContainer} from './FlashcardMenu';
import {Deck} from './Deck';
import {connect} from 'react-redux';
import style from '../style';

export const DecksMenu = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    const decks = this.props.decks.map(d => (<Deck cards={d.cards} key={d.name}/>));
    return (<div> {decks} </div>);
  }
});

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

export const DecksMenuContainer = connect(mapStateToProps)(DecksMenu);
