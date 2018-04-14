import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoins } from '../actions';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchCoins()
  }

  renderData(coin) {
    const name = coin.name;
    return (
      <div>
        {name}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.coin_collection.map(this.renderData)}
      </div>
    )
  }
}

function mapStateToProps({ coin_collection }) {
  return {
    coin_collection
  }
}

export default connect(mapStateToProps, { fetchCoins })(Display);
