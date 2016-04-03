import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {QuizMenuContainer} from './QuizMenu';
import {CreateDeckMenu} from './CreateDeckMenu';
import {DecksMenuContainer} from './DecksMenu';
import {connect} from 'react-redux';

const Body = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    switch (this.props.menu) {
    case 0:
      return (<QuizMenuContainer/>);
    case 1:
      return (<CreateDeckMenu/>);
    case 2:
      return (<DecksMenuContainer flashcardsCount={10}/>);
    default:
      return (<div> NO MENU </div>);
    }
  }
});

export const BodyContainer = connect(s => {return {menu:s.menu};})(Body);
