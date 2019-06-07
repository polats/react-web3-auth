import { Component } from 'react';

class ComponentWithReactWeb3Auth extends Component {

    constructor(props) {
      super(props);
    }

    componentDidUpdate() {
    }

    async componentDidMount() {
      console.log(this.constructor.name + " componentDidMount");
    }

    render() {
      return null;
    }
}



export default ComponentWithReactWeb3Auth;
