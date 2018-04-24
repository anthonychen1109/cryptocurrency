import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchCoin } from '../actions';

import SingleDisplayCoin from './single_display_coin';

class SearchCoin extends Component {
  state = {
    coin_name: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchCoin(this.state.coin_name);
    this.setState({ coin_name: ''})
    this.props.setDisplay();
  }

  handleChange = (e) => {
    this.setState({ coin_name: e.target.value })
  }

  render() {
    return (
      <div className="container">
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            onChange={this.handleChange}
            value={this.state.coin_name}
          />
          <span className="input-group-btn">
            <button
              className="btn btn-lighten"
              >
              Search
            </button>
          </span>
        </form>
      </div>
    )
  }
}

export default connect(null, { searchCoin })(SearchCoin);
