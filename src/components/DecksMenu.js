import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Deck} from './Deck';
import {connect} from 'react-redux';
import style from '../style';
import {map} from 'ramda';

const decksMenuStyle = {
  position: 'absolute',
  left: 0,
  top: 100,
  bottom: 100,
  right: 0,
  backgroundColor: style.backgroundColor,
  overflowY: 'scroll'
};

const DecksMenu = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    const decks = map(d => (<Deck cards={d.cards} key={d.name}/>), this.props.decks);
    return (<div style={decksMenuStyle}> {decks} </div>);
  }
});

export const DecksMenuContainer = connect(s => {return {decks:s.decks};})(DecksMenu);
