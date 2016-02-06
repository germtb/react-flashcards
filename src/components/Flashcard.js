import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const flashcardStyle = {
};

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div> Card </div>
    );
  }
});
