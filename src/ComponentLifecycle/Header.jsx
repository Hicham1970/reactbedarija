import { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }
  static getDerivedStateFromProps(props, state) {
    return { favoriteColor: props.favCol };
  }
  render() {
    return <h1>My Favorite Color is {this.state.favoriteColor}</h1>;
  }
}
