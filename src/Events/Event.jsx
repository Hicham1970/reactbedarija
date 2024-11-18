// export default function Event() {
//   const handleClick = () => {
//     alert("Boom tu click sur le bouton !!!!!");
//   };
//   const handleChange = () => {
//     alert("input est changé !!!!!");
//   };

//   return (
//     <div>
//       <input onClick={handleChange}></input>
//       <br></br>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// }

// Class Component

import { Component } from "react";

export default class Event extends Component {
  handleClick = () => {
    alert("Boom tu click sur le bouton !!!!!");
  };
  handleChange = () => {
    alert("input est changé !!!!!");
  };
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <input onChange={this.handleChange}></input>
        <br></br>
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
