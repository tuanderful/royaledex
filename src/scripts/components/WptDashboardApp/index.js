import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';

// CSS
require('../../../styles/normalize.css');
require('../../../styles/main.css');

const imageURL = require('../../../images/yeoman.png');

class WptDashboardApp extends React.Component {
  render() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
          <span>hello world</span>
        </ReactTransitionGroup>
      </div>
    );
  }
}

export default WptDashboardApp;
