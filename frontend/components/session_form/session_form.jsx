import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginPage: false,
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.state.loginPage) {
      this.props.login(user)
        .then(() => hashHistory.replace("/"))
        .fail((error) => console.log(error));
    } else {
      this.props.signup(user)
        .then(() => hashHistory.replace("/"))
        .fail((error) => console.log(error));
    }
  }

  toggleStatus(e) {
    e.preventDefault();
    let loginPage = !this.state.loginPage;
    this.props.clearErrors();
    this.setState({
      loginPage,
      username: "",
      password: ""
    });
  }

  demoLogin() {
    this.setState({ loginPage: true });

    const that = this;
    let counter = 1;
    let passwordCounter = 1;

    const username = "WelcomeGuest";
    const password = "password";
    const usernameLoop = username.length;
    const passwordLoop = password.length;

    (function usernameNext() {
      if (counter++ > usernameLoop) return passwordNext();
      setTimeout(() => {
        that.setState({ username: username.slice(0, counter) });
        usernameNext();
      }, 70);
    })();

    function passwordNext() {
      if (passwordCounter++ > passwordLoop) {
        return that.props.login({
          username: that.state.username,
          password: that.state.password
        }).then(hashHistory.replace("/"));
      }

      setTimeout(() => {
        that.setState({ password: password.slice(0, passwordCounter) });
        passwordNext();
      }, 70);
    }
  }

  renderErrors() {
    return (
      <ul className="errors">
        {this.props.errors.map((err, i) => (
          <li key={i}>{err}</li>
        ))}
      </ul>
    );
  }

  render() {
    let buttonText = this.state.loginPage ? "LOGIN" : "SIGNUP";
    let questionText = this.state.loginPage ?
      "Don't have an account?" : "Already have an account?";
    let text = this.state.loginPage ? "Sign Up" : "Login";

    return (
      <div className="background">
        <div className="overlay">
          <div className="session-form">
            <div className="login-box">
              <div className="login-box-instruction">
                <h1>MatchUp</h1>
                <div className="divide-line"></div>
                <p>Sign up to find your tennis partner for a match!</p>
              </div>
              <div className="login-box-inputs">
                <div className="errors-container">
                  {this.props.errors && this.renderErrors()}
                </div>
                <label>
                  <input type="text"
                    placeholder="Username"
                    className="login-input-field"
                    value={this.state.username}
                    onChange={this.update('username')}
                    required />
                </label>

                <label>
                  <input type="password"
                    placeholder="Password"
                    className="login-input-field"
                    value={this.state.password}
                    onChange={this.update('password')}
                    required />
                </label>
                <div className="buttons">
                  <button id="sign-up-log-in-button" type="submit"
                          onClick={this.handleSubmit}>{buttonText}</button>
                  <button id ="demo-button"
                    type="button" onClick={this.demoLogin}>DEMO</button>
                </div>
                <p id="question-login">{questionText}</p>
                <button id="status-toggle"
                        onClick={this.toggleStatus}>{text}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
