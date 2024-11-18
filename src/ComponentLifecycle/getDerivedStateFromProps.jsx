import { Component } from "react";
export default class Header3 extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.favCol !== state.favoriteColor) {
      return { favoriteColor: props.favCol };
    }
    return null;
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}
