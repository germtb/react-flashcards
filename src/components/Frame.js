import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {HeaderContainer} from './Header';
import {Footer} from './Footer';
import {BodyContainer} from './Body';

const panelStyle = {
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div style={panelStyle}>
        <HeaderContainer />
        <BodyContainer />
        <Footer />
      </div>
    );
  }
});
