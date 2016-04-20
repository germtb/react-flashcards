import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import store from '../index';
import {forEach} from 'ramda';

const tableStyle = {
  justify: 'center',
  display: 'flex',
  fontSize: '15',
  borderCollapse: 'collapse',
  width: '50%',
  justifyContent: 'center'
};

const trStyle = {
};

const tdStyle = {
  border: '1px solid black'
};

export const Deck = React.createClass({
  mixins: [PureRenderMixin],
  selectDeck: function(id) {
    store.dispatch({
    });
  },
  render: function() {
    const cards = [];
    forEach(c => cards.push((
      <tr key={c[0] + c[1]} style={trStyle}>
        <td style={tdStyle}> {c[0]} </td>
        <td style={tdStyle}> {c[1]} </td>
      </tr>
    )), this.props.cards);
    return (
      <div>
        <button onClick={_ => this.selectDeck(this.props.key)}> Select </button>
        <table cellPadding='5' cellSpacing="5" style={tableStyle}>
          <tbody>
            {cards}
          </tbody>
        </table>
      </div>
    );
  }
});
