import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllCoins } from '../actions';
import images from '../components/images';
import Header from '../components/header';

const bg = images.bg2;

class Markets extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    this.props.fetchAllCoins()
  }

  render() {
    // console.log(this.props.coin_collection);
    let render_data = this.props.coin_collection.coin_list_all.map((item, index) => {
      return (
        <div key={index} className="grid container">
          <p>{item.name}</p>
          <p>{item.price_usd}</p>
          <p>{item.percent_change_1h}</p>
        </div>
      )
    })
    return (
      <div
        className="markets"
        style={{
          backgroundAttachment: "fixed",
          backgroundImage: "url(" + bg + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100vh"
        }}
        >
        <Header />
        <div className="market-container">
          <div className="container market-header">
            <p>Coin Name:</p>
            <p>Price USD:</p>
            <p>% change 1h</p>
          </div>
          <div className="market-display">
            {render_data}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ coin_collection }) {
  return {
    coin_collection
  }
}

export default connect(mapStateToProps, { fetchAllCoins })(Markets);
