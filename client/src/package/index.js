import { Component } from 'react';
import { ContractWrappers, MetamaskSubprovider, RPCSubprovider, Web3ProviderEngine } from '0x.js';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { SignerSubprovider } from '@0x/subproviders';
import * as _ from 'lodash';

export * from './providerstatus';
export * from './loginbutton';

const networkToRPCURI = {
    1: 'https://mainnet.infura.io',
    3: 'https://ropsten.infura.io',
    4: 'https://rinkeby.infura.io',
    42: 'https://kovan.infura.io',
    50: 'http://localhost:8545',
};

export default class ComponentWithReactWeb3Auth extends Component {

    constructor(props) {
      super(props);

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

    componentDidUpdate() {
      console.log(this.state);
    }

    async componentDidMount() {
      console.log(this.constructor.name + " componentDidMount");
    }

    render() {
      return null;
    }
}
