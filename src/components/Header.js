import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import style from '../style';

const tableStyle = {
  position: 'absolute',
  float: 'left',
  left: 0,
  right: 0,
  top: 0,
  height: 100,
  width: '100%',
  backgroundColor: style.headerBackgroundColor,
  overflowX: 'auto',
  overflowY: 'hidden',
  margin: 'auto'
}

const horizontalScrollStyle = {
  left: 0,
  right: 0,
  top: 0,
  height: 100,
  width: '100%',
  backgroundColor: style.headerColor,
  overflowX: 'auto',
  overflowY: 'hidden',
  margin: 'auto'
}

const itemStyle = {
  float: 'left',
  position: 'relative',
  width: '33%',
  height: 30,
  textAlign: 'center',
  fontSize: '30'
};

export const Header = React.createClass({
  mixins: [PureRenderMixin],
  onClick: function (event) {
    console.log(event);
  },
  render: function() {
    return (
      <div style={tableStyle}>
        <div style={horizontalScrollStyle}>
          <div onClick={this.onClick} style={itemStyle}> Browse flashcard decks </div>
          <div onClick={this.onClick} style={itemStyle}> Create your own flashcard deck </div>
          <div onClick={this.onClick} style={itemStyle}> About </div>
        </div>
      </div>
    );
  }
});
