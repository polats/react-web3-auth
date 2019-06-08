import { Navbar, NavbarBrand, NavbarItem, Tag } from 'bloomer';
import * as React from 'react';

const Network = {
    Mainnet : 'Mainnet',
    Ropsten : 'Ropsten',
    Kovan : 'Kovan',
    Rinkeby : 'Rinkeby',
    Unknown : 'Unknown',
}
const networkIdToNetwork = {
    1: Network.Mainnet,
    3: Network.Ropsten,
    4: Network.Rinkeby,
    42: Network.Kovan,
    50: Network.Unknown,
};

export class ProviderStatus extends React.Component {

    state = { networkId: undefined };

    constructor(props) {
      super(props);
      this.fetchNetworkDetailsAsync();
    }

    async fetchNetworkDetailsAsync() {
        const { web3Wrapper } = this.props;
        if (web3Wrapper) {
            const networkId = await web3Wrapper.getNetworkIdAsync();
            if (networkId !== this.state.networkId) {
                this.setState({ networkId });
            }
        }
    }
    renderNetworkIndicator(): React.ReactNode {
        const { networkId } = this.state;
        if (networkId) {
            const networkName = networkIdToNetwork[networkId] || Network.Unknown;
            if (networkName === Network.Unknown || networkName === Network.Mainnet) {
                return <Tag isColor="warning">{networkName} - Please connect to a test network</Tag>;
            }
            return <Tag isColor="primary">{networkName}</Tag>;
        }
        return <Tag isColor="danger">Disconnected</Tag>;
    }
    
    render(): React.ReactNode {
        const networkRender = this.renderNetworkIndicator();
        return (
            <Navbar style={{ zIndex: -1 }}>
                <NavbarBrand>
                    <NavbarItem>
                        <strong> Network Status </strong>
                        <NavbarItem>{networkRender}</NavbarItem>
                    </NavbarItem>
                </NavbarBrand>
            </Navbar>
        );
    }

}
