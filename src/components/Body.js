import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {FlashcardMenuContainer} from './FlashcardMenu';
import {connect} from 'react-redux';
import style from '../style';
import {store} from '../index';

export const Body = React.createClass({
  mixins: [PureRenderMixin],
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
