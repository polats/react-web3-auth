import React from 'react';
// import ComponentWithReactWeb3Auth from 'react-web3-auth'; // replace './package' with package name when using via npm install
import ComponentWithReactWeb3Auth from './package';

class Demo extends ComponentWithReactWeb3Auth {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <h1>react-web3-auth demo</h1>

        <p>This Demo component is subclassed from <strong>ComponentWithReactWeb3Auth</strong>,
        which adds web3 authentication using passport.js and passport-web3</p>

      </div>


    );
  }
}

export default Demo;
