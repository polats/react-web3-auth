
import React from 'react';
import { InstallMetamask } from './install_metamask';

// import ComponentWithReactWeb3Auth, {ProviderStatus, LoginButton} from 'react-web3-auth'; // import when using via npm install
import ComponentWithReactWeb3Auth, {ProviderStatus, LoginButton} from './package';


class Demo extends ComponentWithReactWeb3Auth {
  constructor(props) {
    super(props);

  }

  render() {
    if (!this.state || !this.state.contractWrappers || !this.state.web3Wrapper) {
        return (
          <div>
            {<InstallMetamask />}
          </div>
        );
    }
    return (
        <div style={{ paddingLeft: 30, paddingRight: 30, paddingBottom: 30 }}>
            <ProviderStatus web3Wrapper={this.state.web3Wrapper}/>
            <LoginButton web3Wrapper={this.state.web3Wrapper}/>
        </div>
    );
  }
}

export default Demo;
