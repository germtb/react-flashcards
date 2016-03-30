import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import style from '../style';

const footerStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  height: 100,
  width: '100%',
  backgroundColor: style.footerBackgroundColor,
};

export const Footer = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div style={footerStyle}/>
    );
  }
});
