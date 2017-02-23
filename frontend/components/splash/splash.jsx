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

        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
