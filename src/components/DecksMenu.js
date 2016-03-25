import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Deck} from './Deck';
import {connect} from 'react-redux';

export const DecksMenu = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    const decks = this.props.decks.map(d => (<Deck cards={d.cards} key={d.name}/>));
    return (<div> {decks} </div>);
  }
});

export const DecksMenuContainer = connect(s => {return {decks:s.decks};})(DecksMenu);
