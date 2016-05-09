import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Body} from './Body';
import style from '../style';

const frameStyle = {
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

const footerStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: 100,
  width: '100%',
  backgroundColor: style.footerBackgroundColor,
};

export const Frame = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div style={frameStyle}>
        <Body/>
        <Footer/>
      </div>
    );
  }
});

const Footer = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div style={footerStyle}/>
    );
  }
});
