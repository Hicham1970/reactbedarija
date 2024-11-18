/**
 * A React component that displays a button to toggle the visibility of a `HelloWorld` component.
 *
 * The `ToggleName` component has the following features:
 * - Maintains a `displayName` state to track whether the `HelloWorld` component should be displayed.
 * - Provides a button that toggles the `displayName` state when clicked.
 * - Conditionally renders the `HelloWorld` component based on the `displayName` state.
 *
 * @component
 * @example
 * <ToggleName />
 */
import { Component } from "react";
import HelloWorld from "../Hello/props";
export default class ToggleName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: true, // on peut l'afficher a priori
    };
  }
  age = 22;
  // si le displayName est true on l'affiche
  toggleName = () => {
    this.setState((prevState) => {
      return { displayName: !prevState.displayName };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleName}>
          {this.state.displayName.toString()}
        </button>

        {this.state.displayName === true ? (
          <HelloWorld lastName={"Garoum"} />
        ) : null}
      </div>
    );
  }
}
