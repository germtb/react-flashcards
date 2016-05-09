import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {QuizMenuContainer} from './QuizMenu';

export const Body = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (<QuizMenuContainer/>);
  }
});
