import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchCoin from './search_coin';
import Header from '../components/header';
import images from '../components/images';

const bg = images.bg3;

class SingleDisplayCoin extends Component {
  state = {
    show: false
  }

  setDisplay = () => {
    this.setState({ show: true })
  }

  render() {
    // console.log(this.props.search_coin.coin_name.name);
    let symbol = this.props.search_coin.coin_name.symbol;
    let name = this.props.search_coin.coin_name.name;
    let price_usd = this.props.search_coin.coin_name.price_usd;
    let price_btc = this.props.search_coin.coin_name.price_btc;

    return (
      <div
        className="single_coin"
        style={{
          backgroundImage: "url(" + bg + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
        <Header />
        <SearchCoin setDisplay={this.setDisplay}/>
          {this.state.show ?
            <div className="card single_card container">
              <div className="card-body">
                <p className="card-text">{symbol}</p>
                <p className="card-text">{name}</p>
                <p className="card-text">Price USD: {price_usd}</p>
                <p className="card-text">Price BTC: {price_btc}</p>
              </div>
            </div> :
            <div className="enter-name">
              <h1>Enter a Coin Name</h1>
            </div>
          }
      </div>
    )
  }
}

function mapStateToProps({ search_coin }) {
  return {
    search_coin
  }
}

export default connect(mapStateToProps, null)(SingleDisplayCoin);
