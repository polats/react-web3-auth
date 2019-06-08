import { Component } from 'react';

export class LoginButton extends Component {

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
