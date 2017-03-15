import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.goToSignIn = this.goToSignIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.logout();
  }

  goToSignIn() {
    this.props.router.push("/signup");
  }

  isLoggedIn() {
    return (
      <ul>
        <li onClick={this.goToSignIn}>Host an Event</li>
        <li onClick={this.goToSignIn}>Help</li>
        <li onClick={this.goToSignIn}>My Account</li>
        <li onClick={this.signOut}>Sign Out</li>
      </ul>
    );
  }

  isLoggedOut() {
    return (
      <ul>
        <li onClick={this.goToSignIn}>Host an Event</li>
        <li onClick={this.goToSignIn}>Help</li>
        <li onClick={this.goToSignIn}>Sign In</li>
        <li onClick={this.goToSignIn}>Demo</li>
      </ul>
    );
  }

  render() {
    let currentUser = this.props.currentUser;

    return (
      <header>
        <section className="nav-left">
          <span>
            <Link to="/">
              <img id="logo" src="http://res.cloudinary.com/rlee0525/image/upload/v1489450126/logo1_xm2m2j.png"/>
            </Link>
          </span>
        </section>
        <section className="nav-right">
          { currentUser ? this.isLoggedIn() : this.isLoggedOut()}
        </section>
      </header>
    );
  }
}

export default withRouter(Navbar);
