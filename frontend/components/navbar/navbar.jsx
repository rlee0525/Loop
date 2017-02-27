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

  searchBar() {
    return (
      <section className="nav-search-bar">
        <input type="text"
          placeholder="Search for a match"
          className="search-bar" />
      </section>
    );
  }

  isLoggedIn() {
    return (
      <ul>
        <li><button onClick={this.signOut}>Sign Out</button></li>
      </ul>
    );
  }

  isLoggedOut() {
    return (
      <ul>
        <li><button onClick={this.goToSignIn}>Sign In</button></li>
        <li><button onClick={this.goToSignIn}>Demo</button></li>
      </ul>
    );
  }

  render() {
    let currentUser = this.props.currentUser;

    return (
      <header>
        <section className="nav-left">
          <span><Link to="/"><img id="logo" src="http://res.cloudinary.com/rlee0525/image/upload/c_scale,h_25/v1487826027/Logo_rovpdx.png"/></Link></span>
          <ul>
            <li><Link to="/players">All Players</Link></li>
            <li><Link to="/courts">All Courts</Link></li>
          </ul>
        </section>

        { currentUser && this.searchBar() }

        <section className="nav-right">
          { currentUser ? this.isLoggedIn() : this.isLoggedOut()}
        </section>
      </header>
    );
  }
}

export default withRouter(Navbar);
