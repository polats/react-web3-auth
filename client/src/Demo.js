
import React from 'react';
import { ContractWrappers, MetamaskSubprovider, RPCSubprovider, Web3ProviderEngine } from '0x.js';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { SignerSubprovider } from '@0x/subproviders';
import { Content, Footer } from 'bloomer';
import { InstallMetamask } from './install_metamask';
import { Nav } from './nav';

import * as _ from 'lodash';

// import ComponentWithReactWeb3Auth from 'react-web3-auth'; // replace './package' with package name when using via npm install
import ComponentWithReactWeb3Auth from './package';

const ethUtil = require('ethereumjs-util');
const web3 = window.web3;

const networkToRPCURI = {
    1: 'https://mainnet.infura.io',
    3: 'https://ropsten.infura.io',
    4: 'https://rinkeby.infura.io',
    42: 'https://kovan.infura.io',
    50: 'http://localhost:8545',
};


// The contents of the message can be anything
const rawMessage = 'Some message';
const msg = ethUtil.bufferToHex(new Buffer(rawMessage, 'utf8'));
var promptMetamask;
var address;

class Demo extends ComponentWithReactWeb3Auth {
  constructor(props) {
    super(props);

    this.handleSignature = this.handleSignature.bind(this);
    this.web3Login = this.web3Login.bind(this);

    this.initializeWeb3Async();
  }

  async initializeWeb3Async() {
      let injectedProviderIfExists = window.ethereum;
      if (!_.isUndefined(injectedProviderIfExists)) {
          if (!_.isUndefined(injectedProviderIfExists.enable)) {
              try {
                  await injectedProviderIfExists.enable();
              } catch (err) {
                  console.log(err);
              }
          }
      } else {
          const injectedWeb3IfExists = window.web3;
          if (!_.isUndefined(injectedWeb3IfExists) && !_.isUndefined(injectedWeb3IfExists.currentProvider)) {
              injectedProviderIfExists = injectedWeb3IfExists.currentProvider;
          } else {
              promptMetamask = true;
              return undefined;
          }
      }
      if (injectedProviderIfExists) {
          // Wrap Metamask in a compatibility wrapper as some of the behaviour
          // differs
          const networkId = await new Web3Wrapper(injectedProviderIfExists).getNetworkIdAsync();
          const signerProvider =
              injectedProviderIfExists.isMetaMask || injectedProviderIfExists.isToshi
                  ? new MetamaskSubprovider(injectedProviderIfExists)
                  : new SignerSubprovider(injectedProviderIfExists);
          const provider = new Web3ProviderEngine();
          provider.addProvider(signerProvider);
          provider.addProvider(new RPCSubprovider(networkToRPCURI[networkId]));
          provider.start();
          const web3Wrapper = new Web3Wrapper(provider);
          const contractWrappers = new ContractWrappers(provider, { networkId });
          // Load all of the ABI's into the ABI decoder so logs are decoded
          // and human readable
          _.map(
              [
                  contractWrappers.exchange.abi,
                  contractWrappers.erc20Token.abi,
                  contractWrappers.etherToken.abi,
                  contractWrappers.forwarder.abi,
              ],
              abi => web3Wrapper.abiDecoder.addABI(abi),
          );
          this.setState({ web3Wrapper, contractWrappers, web3: injectedProviderIfExists });
      }
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
    if (!this.state || !this.state.contractWrappers || !this.state.web3Wrapper) {
        return (
          <div>
            {promptMetamask && <InstallMetamask />}
          </div>
        );
    }
    return (
        <div style={{ paddingLeft: 30, paddingRight: 30, paddingBottom: 30 }}>
            <Nav web3Wrapper={this.state.web3Wrapper} />
            <Content className="container">
                {this.state.web3 && (
                    <div>
                    <h1>react-web3-auth demo</h1>

                    <button onClick={this.web3Login}>Login via Web3</button>

                    </div>
                )}
                {!this.state.web3 && <InstallMetamask />}
            </Content>
            <Footer />
        </div>
    );
  }
}

export default Demo;
