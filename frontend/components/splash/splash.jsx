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
        <div className="splash-body">
          <div className="banner">
            <h1>
              <span id="title">Which event?</span>
              Connect with next person<br/>on Loop.
            </h1>
            <section className="search-bar-section">
              <input type="text"
                placeholder="Search for an event"
                className="search-bar" />
            </section>
          </div>
          <div className="splash-main">

          </div>
          <div className="footer">

          </div>
        </div>
        <div className="gray-area"></div>
      </div>
    );
  }
}

export default withRouter(Splash);
