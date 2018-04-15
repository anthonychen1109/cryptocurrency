import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Images
import images from '../components/images';

const bg = images.bg;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
        <form>
          <div className="register">

            <div className="register-username">
              <div className="register-fieldname">
                <p>Username:</p>
              </div>
              <div className="register-input">
                <input type='text' />
              </div>
            </div>

            <div className="register-pw">
              <div className="register-fieldname">
                <p>Password:</p>
              </div>
              <div className="register-input">
                <input type='password' />
              </div>
            </div>

            <div className="register-confirm-pw">
              <div className="register-fieldname">
                <p>Enter Password Again: </p>
              </div>
              <div className="register-input">
                <input type='text' />
              </div>
            </div>

            <button className="register-btn btn btn-lighten">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup;
