import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import style from '../style';
import {store} from '../index';
import {connect} from 'react-redux';

const tableStyle = {
  position: 'absolute',
  float: 'left',
  left: 0,
  right: 0,
  top: 0,
  height: 100,
  width: '100%',
  overflowX: 'auto',
  overflowY: 'hidden',
  margin: 'auto'
};

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
};

const itemStyle = {
  float: 'left',
  position: 'relative',
  width: '25%',
  height: '100%',
  textAlign: 'center',
  fontSize: '30',
  backgroundColor: style.headerBackgroundColor,
};

const selectedItemStyle = Object.assign({}, itemStyle, {
  backgroundColor: 'white'
});

const HeaderCell = React.createClass({
  mixins: [PureRenderMixin],
  onClick: function () {
    store.dispatch({
      type: 'SET_MENU',
      menu: this.props.index
    });
  },
  styleSelector: function () {
    return this.props.menu === this.props.index ? selectedItemStyle : itemStyle;
  },
  render: function() {
    return (
      <div onClick={this.onClick} style={this.styleSelector()}> {this.props.title} </div>
    );
  }
});

const HeaderCellContainer = connect(s => {return {menu:s.menu};})(HeaderCell);

export const Header = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div style={tableStyle}>
        <div style={horizontalScrollStyle}>
          <HeaderCellContainer index={0} title={"Quiz"}/>
          <HeaderCellContainer index={1} title={"Create a deck"}/>
          <HeaderCellContainer index={2} title={"Pick a deck"}/>
          <HeaderCellContainer index={3} title={"About"}/>
        </div>
      </div>
    );
  }
});
