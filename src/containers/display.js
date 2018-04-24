import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCoins, fetchHistoricalData } from '../actions';
import SearchCoin from './search_coin';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.fetchCoins = this.fetchCoins.bind(this);
  }

  fetchCoins() {
    this.props.fetchCoins()
  }

  componentDidMount() {
    this.fetchCoins();
  }

  componentWillUpdate() {
    setInterval(this.fetchCoins, 200000)
  }

  render() {
    // console.log(this.props.coin_collection.coin_list);
    // console.log(this.props.specific_coin_price.coin_price.price_usd);
    let render_data = this.props.coin_collection.coin_list.map((item, index) => {

      return (
        <div key={index} className="card display-card">
          <div className="card-body"
            onClick={() => this.props.fetchHistoricalData(item.symbol)}>
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
        <SearchCoin />
        <div className="display-cards">
          {render_data}
        </div>
      </div>
    )
  }
}

function mapStateToProps({ coin_collection, coin_history, specific_coin_price }) {
  return {
    coin_collection,
    coin_history,
    specific_coin_price
  }
}

export default connect(mapStateToProps, { fetchCoins, fetchHistoricalData })(Display);
