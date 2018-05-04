import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../actions';
import { withRouter } from "react-router-dom";

// Images
import images from '../components/images';

const bg = images.bg;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirm: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.password === this.state.confirm) {
      this.props.signUp(this.state.username, this.state.password);
      this.setState({
        password: '',
        confirm: ''
      })
      this.props.history.push('/')
    } else {
      alert('Make sure your passwords match')
      this.setState({
        password: '',
        confirm: ''
      })
    }
  }

  handleUsername(e) {
    this.setState({ username: e.target.value })
  }

  handlePassword(e) {
    this.setState({ password: e.target.value })
  }

  handleConfirm(e) {
    this.setState( { confirm: e.target.value })
  }

  render() {
    return (
      <div className="sign-up"
        style={{
          backgroundImage: "url(" + bg + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="userName">User Name</label>
            <input
              type="text"
              className="form-control"
              id="userName"
              aria-describedby="userHelp"
              placeholder="Enter User Name"
              onChange={this.handleUsername}
              value={this.state.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={this.handlePassword}
              value={this.state.password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={this.handleConfirm}
              value={this.state.confirm}
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

      </div>
    )
  }
}

export default withRouter(connect(null, { signUp })(Signup));
