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
              Connect with next person<br/>on Loop<span id="title">.</span>
            </h1>

            <div className="search-bar-container">
              <div className="search-bar-section">
                <div className="search-container">
                  <div className="search-title">
                    <p>Category</p>
                  </div>
                  <div className="search-input">
                    <input type="text"
                      placeholder="All"
                      className="search-bar" />
                  </div>
                </div>

                <div className="search-container">
                  <div className="search-title">
                    <p>Activity</p>
                  </div>
                  <div className="search-input">
                    <input type="text"
                      placeholder="Anything"
                      className="search-bar" />
                  </div>
                </div>

                <div className="search-container">
                  <div className="search-title">
                    <p>Date</p>
                  </div>

                  <div className="search-input">
                    <input type="text"
                      placeholder="Anytime"
                      className="search-bar" />
                  </div>

                  <div className="search-button">
                    <button>Search</button>
                  </div>
                </div>
              </div>
            </div>
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
