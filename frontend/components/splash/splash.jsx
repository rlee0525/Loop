import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { currentUser } = this.props;

    return (
      <div className="splash-page">
        <div className="splash-overlay">
          <div className="banner">
            <h1>Find your match today</h1>
            <button id="banner-button">Get started</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
