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
      <table border="1" borderColor="black" cellPadding="5" cellSpacing="5" style={cardStyle} key={c[0] + c[1]}>
        <tbody>
          <tr>
            <td> {c[0]} </td>
            <td> {c[1]} </td>
          </tr>
        </tbody>
      </table>
    ));
    return (
      <div style={deckStyle}>
        {cards}
      </div>
    );
  }
});
