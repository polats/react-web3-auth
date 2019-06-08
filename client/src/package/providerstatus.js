import { Component } from 'react';

export class ProviderStatus extends Component {

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
