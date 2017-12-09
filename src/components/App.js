import React, { Component } from 'react'
import './App.css'
import PlaidLink from './LinkES6' //'react-plaid-link'
import credentials from '../creds'


class App extends Component {
  handleOnSuccess(token, metadata) {
    // send token to client server
    console.log(token);
  }
  render() {
    return (
      <PlaidLink
        publicKey="PLAID_PUBLIC_KEY"
        product="auth"
        env="tartan"
        clientName="plaidname"
        onSuccess={this.handleOnSuccess}
      />
    )
  }
}

export default App;
