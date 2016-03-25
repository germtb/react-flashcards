import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const deckStyle = {
  justifyContent: 'left',
  fontSize: '15',
};

const cardStyle = {
  display: 'flex',
};

export const Deck = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    const cards = this.props.cards.map(c => (
        <span style={cardStyle} key={c[0]}> {c[0] + ': ' + c[1]} </span>
    ));
    return (
      <div style={deckStyle}>
        <div> {this.props.key} </div>
        <div> {cards} </div>
        <div> ------- </div>
      </div>
    );
  }
});
