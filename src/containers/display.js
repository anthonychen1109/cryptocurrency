import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

  render() {
    // console.log(this.props.coin_collection.coin_list);
    let render_data = this.props.coin_collection.coin_list.map((item, index) => {
      return (
        <div key={index} className="card">
          <div className="card-body">
            <p className="card-text">{item.symbol}</p>
            <p className="card-text">{item.name}</p>
            <p className="card-text">Price USD: {item.price_usd}</p>
            <p className="card-text">Price BTC: {item.price_btc}</p>
          </div>
        </div>
      )
    })
    return (
      <div className="display">
        <div className="display-title">
          <h1>Top 10 Coins by Rank</h1>
        </div>
        <div className="display-cards">
          {render_data}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ coin_collection }) {
  return {
    coin_collection
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCoins }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);
