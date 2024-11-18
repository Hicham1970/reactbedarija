import { Component } from "react";
export default class Header4 extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };
  render() {
    return (
      <div>
        <h1>
          Si la fonction shouldComponentUpdate est true, la couleur change
        </h1>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}
