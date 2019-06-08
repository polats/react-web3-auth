import * as React from 'react';

export class InstallMetamask extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <h1> Please install Metamask </h1>
                <a
                    href="https://metamask.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Metamask is required. Click to download."
                >
                    <img
                        src="https://github.com/MetaMask/faq/raw/master/images/download-metamask-dark.png"
                        width="200px"
                        alt="Download Metamask"
                    />
                </a>
                <p> Once metamask is installed, please refresh this page </p>
            </div>
        );
    }
}
