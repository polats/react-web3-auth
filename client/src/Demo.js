
import React from 'react';
// import ComponentWithReactWeb3Auth from 'react-web3-auth'; // replace './package' with package name when using via npm install
import ComponentWithReactWeb3Auth from './package';

const ethUtil = require('ethereumjs-util');
const web3 = window.web3;

// The contents of the message can be anything
const rawMessage = 'Some message';
const msg = ethUtil.bufferToHex(new Buffer(rawMessage, 'utf8'));
const address = web3.eth.accounts[0];

class Demo extends ComponentWithReactWeb3Auth {
  constructor(props) {
    super(props);

    this.handleSignature = this.handleSignature.bind(this);
    this.web3Login = this.web3Login.bind(this);
  }

  handleSignature(err, signed) {
    if (!err) {
      console.log("address", address);
      console.log("msg", msg);
      console.log("signed", signed);

      const fetchOpts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address, msg, signed })
      };

      fetch('/login', fetchOpts).then(res => {
        if (res.status >= 200 && res.status <= 300) {
          return res.json();
        } else {
          throw Error(res.statusText);
        }
      }).then(json => {
        console.log("succeed", json);
        // Auth succeeded
      }).catch(err => {
        console.log("failed", err);
        // Auth failed
      })
    }
  };

  web3Login() {

    web3.personal.sign(msg, address, this.handleSignature);
  }


  render() {
    return (
      <div className="App">
        <h1>react-web3-auth demo</h1>

        <button onClick={this.web3Login}>Login via Web3</button>

      </div>


    );
  }
}

export default Demo;
