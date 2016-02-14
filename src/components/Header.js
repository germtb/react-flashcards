import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import style from '../style';

const tableStyle = {
  position: 'absolute',
  float: 'left',
  left: 0,
  right: 0,
  top: 0,
  height: 100,
  width: '100%',
  backgroundColor: style.headerBackgroundColor,
  overflowX: 'auto',
  overflowY: 'hidden',
  margin: 'auto'
}

const horizontalScrollStyle = {
  left: 0,
  right: 0,
  top: 0,
  height: 100,
  width: '100%',
  backgroundColor: style.headerColor,
  overflowX: 'auto',
  overflowY: 'hidden',
  margin: 'auto'
}

const itemStyle = {
  float: 'left',
  position: 'relative',
  width: '25%',
  height: 30,
  textAlign: 'center',
};

export default React.createClass({
  mixins: [PureRenderMixin],
  onClick: function (event) {
    console.log(event);
  },
  render: function() {
    return (
      <div style={tableStyle}>
        <div style={horizontalScrollStyle}>
          <div onClick={this.onClick} style={itemStyle}> Option 1 </div>
          <div onClick={this.onClick} style={itemStyle}> Option 2 </div>
          <div onClick={this.onClick} style={itemStyle}> Option 3 </div>
          <div onClick={this.onClick} style={itemStyle}> Option 4 </div>
        </div>
      </div>
    );
  }
});
