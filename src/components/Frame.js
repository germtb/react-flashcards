import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Header} from './Header';
import {BodyContainer} from './Body';
import {Footer} from './Footer';

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
        <Header />
        <BodyContainer />
        <Footer />
      </div>
    );
  }
});
