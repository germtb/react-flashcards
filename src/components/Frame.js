import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

const panelStyle = {
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
};

export default React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div style={panelStyle}>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
});
