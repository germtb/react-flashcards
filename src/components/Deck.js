import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Motion, spring} from 'react-motion';

const deckStyle = {
  justifyContent: 'left',
  fontSize: '15',
}

const cardStyle = {
  display: 'flex',
}

export const Deck = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    var cards = this.props.cards.map(c => (
        <span style={cardStyle} key={c[0] + c[1]}>
          {c[0] + ": " + c[1]}
        </span>
    ));
    return (<div style={deckStyle}> {cards} </div>);
  }
});
