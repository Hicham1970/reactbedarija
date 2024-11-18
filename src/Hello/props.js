// export default function AfficherName({ LastName }) {
//   const age = 15;

//   return (
//     <h1>
//       Hello Hicham {LastName} {age >= 18 ? "Majeur" : "Mineur"}.
//     </h1>
//   );
// }

// Props with Class:

import { Component } from "react";

export default class HelloWorld extends Component {
  age = 2;
  timer = null;

  clickBody = () => {
    alert("Body Clicked");
  };

  componentDidMount() {
    console.log("Component a été monté");
    document.addEventListener("click", this.clickBody);
    this.timer = setInterval(() => {
      console.log("Hello Garoum");
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Composant mis a jour");
  }

  componentWillUnmount() {
    console.log("Composant est Mort");
    document.removeEventListener("click", this.clickBody);
    clearInterval(this.timer);
  }

  render() {
    console.log(this);
    return (
      <h1>
        {" "}
        Hello Garoum {this.props.Name} {this.age >= 18 ? "Majeur" : "Mineur"}
      </h1>
    );
  }
}
