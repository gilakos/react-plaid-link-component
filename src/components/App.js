import React, { Component } from 'react'
import './App.css'
import PlaidLink from './LinkES6' //'react-plaid-link'
// import credentials from '../creds'


const credentials = {
  publicKey: "6b43b4851457948a9d2b6ea1afcbb4",
  clientName: "plaidname"
}


class App extends Component {
  handleOnSuccess(token, metadata) {
    // send token to client server
    console.log('handleOnSuccess: ', token);
  }
  render() {
    return (
      <PlaidLink
        publicKey={credentials.publicKey}
        product={["auth"]}
        env="sandbox"
        apiVersion="v2"
        clientName={credentials.clientName}
        onSuccess={this.handleOnSuccess}
      />
    )
  }
}

export default App
