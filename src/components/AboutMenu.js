import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import style from '../style';

const aboutMenuStyle = {
  position: 'absolute',
  left: 0,
  top: 100,
  bottom: 100,
  right: 0,
  backgroundColor: style.backgroundColor,
  overflowY: 'scroll'
};

export const AboutMenu = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    const newFlashcards = [];
    return (
      <div style={aboutMenuStyle}>
        This project has been created for two different purposes:
          <table cellPadding='5' cellSpacing="5">
            <tbody>
              <tr> <td> - As a react exercise. </td> </tr>
              <tr> <td> - As a tool to help me study japanese. </td> </tr>
              <tr> <td> - Finally, and only if I push the project forward for enough time, as an extensible open-source tool to help people study/memorizying. </td> </tr>
            </tbody>
        </table>
      </div>
    );
  }
});
