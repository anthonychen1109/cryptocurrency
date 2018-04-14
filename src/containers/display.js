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
    console.log(this.props.coin_collection);
    return (
      <div>
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
