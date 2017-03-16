import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.logout();
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  componentWillUnmount() {
    this.closeModal();
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  isLoggedIn() {
    return (
      <ul>
        <li onClick={this.openModal}>Host an Event</li>
        <li onClick={this.openModal}>Help</li>
        <li onClick={this.openModal}>My Account</li>
        <li onClick={this.signOut}>Sign Out</li>
      </ul>
    );
  }

  isLoggedOut() {
    return (
      <ul>
        <li onClick={this.openModal}>Host an Event</li>
        <li onClick={this.openModal}>Help</li>
        <li onClick={this.openModal}>Sign In</li>
        <li onClick={this.openModal}>Demo</li>
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
        <Modal
          className="auth-modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          contentLabel="auth-modal">
          <div className="login-intro-text">
            Welcome to Loop!
          </div>
          <SessionFormContainer closeModal={this.closeModal} />
        </Modal>
        <section className="nav-right">
          { currentUser ? this.isLoggedIn() : this.isLoggedOut()}
        </section>
      </header>
    );
  }
}

export default withRouter(Navbar);
