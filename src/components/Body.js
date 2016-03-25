import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {QuizMenuContainer} from './QuizMenu';
import {DecksMenuContainer} from './DecksMenu';
import {connect} from 'react-redux';

export const Body = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    switch (this.props.menu) {
    case 0:
      return (<QuizMenuContainer/>);
    case 1:
      return (<div> MENU 1 </div>);
    case 2:
      return (<DecksMenuContainer/>);
    default:
      return (<div> NO MENU </div>);
    }
  }
});

export const BodyContainer = connect(s => {return {menu:s.menu};})(Body);
