import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {FlashcardMenuContainer} from './FlashcardMenu';
import {connect} from 'react-redux';
import style from '../style';
import {store} from '../index';

const bodyStyle = {
  position: 'absolute',
  left: 0,
  top: 100,
  bottom: 100,
  right: 0,
  backgroundColor: style.backgroundColor,
  overflowY: 'scroll'
};

const outerDivButtonStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const buttonStyle = {
  fontSize: '30'
}

export const Body = React.createClass({
  mixins: [PureRenderMixin],
  tryAgain: function() {
    store.dispatch({
      type:'RESET'
    });
    store.dispatch({
      type: 'SET_CARDS',
      cards: this.props.wrongAnswers
    });
    store.dispatch({
      type:'GET_NEXT'
    });
  },
  render: function() {
    switch (this.props.menu) {
    case 0:
      return (<FlashcardMenuContainer/>);
    default:
      return (<div> NO MENU </div>);
    }
  }
});

function mapStateToProps(state) {
  return {
    menu: state.menu
  };
}

export const BodyContainer = connect(mapStateToProps)(Body);
