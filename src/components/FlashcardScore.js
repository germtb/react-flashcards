import React from 'react';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const FlashcardScore = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (<div> Congratulations! </div>);
  }
});

function mapStateToProps(state) {
  return {
  };
}

export const FlashcardScoreContainer = connect(mapStateToProps)(FlashcardScore);
