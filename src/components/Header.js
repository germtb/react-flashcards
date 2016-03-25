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
  fontSize: '30',
  backgroundColor: 'red',
};

const selectedItemStyle = Object.assign({}, itemStyle, {
  backgroundColor: 'blue'
});

export const Header = React.createClass({
  mixins: [PureRenderMixin],
  onClick: function (menu) {
    store.dispatch({
      type: 'SET_MENU',
      menu: menu
    });
  },
  render: function() {
    return (
      <div style={tableStyle}>
        <div style={horizontalScrollStyle}>
          <div onClick={_ => this.onClick(0)} style={this.props.menu === 0 ? selectedItemStyle : itemStyle}> Decks </div>
          <div onClick={_ => this.onClick(1)} style={this.props.menu === 1 ? selectedItemStyle : itemStyle}> Create a deck </div>
          <div onClick={_ => this.onClick(2)} style={this.props.menu === 2 ? selectedItemStyle : itemStyle}> About </div>
        </div>
      </div>
    );
  }
});

function mapStateToProps(state) {
  return {
    menu: state.menu
  };
}

export const HeaderContainer = connect(mapStateToProps)(Header);
