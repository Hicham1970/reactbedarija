import { Component } from "react";

export default class Header2 extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 4000);
  }
  render() {
    return (
      <>
        <h1>After 4 seconde the state will be changed</h1>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
      </>
    );
  }
}
