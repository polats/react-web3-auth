import { Component } from 'react';
import * as React from 'react';

const ethUtil = require('ethereumjs-util');
const web3 = window.web3;

// The contents of the message can be anything
const rawMessage = 'Some message';
const msg = ethUtil.bufferToHex(new Buffer(rawMessage, 'utf8'));
var address;

export class LoginButton extends Component {

    constructor(props) {
      super(props);

      this.handleSignature = this.handleSignature.bind(this);
      this.web3Login = this.web3Login.bind(this);

      if (props.web3Wrapper)
        address = props.web3Wrapper.selectedAccount;
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
      address = web3.eth.accounts[0];

      web3.personal.sign(msg, address, this.handleSignature);
    }

    render() {
      return (
      <div>
          <button onClick={this.web3Login}>Login via Web3</button>
      </div>
      );
    }
}
