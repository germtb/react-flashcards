import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {FlashcardMenuContainer} from './FlashcardMenu';
import {DecksMenuContainer} from './DecksMenu';
import {connect} from 'react-redux';
import style from '../style';

export const Body = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    switch (this.props.menu) {
    case 0:
      return (<FlashcardMenuContainer/>);
    case 1:
      return (<div> MENU 1 </div>);
    case 2:
      return (<DecksMenuContainer/>);
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
