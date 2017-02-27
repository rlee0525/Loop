import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Splash extends React.Component {
  constructor(props) {
    super(props);

    this.goToSignUp = this.goToSignUp.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  goToSignUp() {
    this.props.router.push("/signup");
  }

  render() {
    return (
      <div className="splash-page">
        <div className="splash-overlay">
          <div className="banner">
            <h1>Find your match today</h1>
            <button id="banner-button"
                    onClick={this.goToSignUp}>Get started</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Splash);
