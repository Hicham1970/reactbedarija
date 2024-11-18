/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// Fonction Component
import { useState, useEffect } from "react";
export default function Counter({ initialValue, step }) {
  const [count, setCount] = useState(initialValue);
  const [age, setAge] = useState(initialValue);
  const [time, setTime] = useState(new Date());
  // Hooks
  // useState
  // useEffect comparable a componentDidMount, componentDidUpdate et
  // componentWillUnmount pour les Class components

  // Ici elle s'execute chaque fois apres le rendre  car il n y a pas de dependencies, et c'est pratiquement inutilisable
  useEffect(() => {
    console.log("Every time after the rendre!");
  });

  // Ici elle joue le rôle du componentDidMount, s'execute une seule fois
  useEffect(() => {
    console.log("Composant Mounted !!");
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Nettoyage de l'intervalle lors du démontage du composant, la même chose si on ajoute un eventListener , si on l'ajoute on doit le supprimer pour les performances
    return () => clearInterval(timer);
  }, []);

  // Ici elle joue le rôle du componentDidUpdate, si le count change cette fonction fired
  useEffect(() => {
    console.log("Composant mis a jour!!");
  }, [count]);

  // Ici elle joue le rôle du componentDidUpdate, si et seulement si l'age change cette fonction fired
  useEffect(() => {
    console.log("Composant age est mis a jour!!");
  }, [age]);

  return (
    <div className="container">
      <span>Date : {time.toLocaleString()}</span>
      <h1>Il y a {count} secondes</h1>

      <button
        onClick={() => {
          setCount((prevCount) => prevCount + step);
        }}
      >
        UP
      </button>
      <br></br>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount - step);
        }}
      >
        Down
      </button>
      <br></br>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Rest
      </button>
    </div>
  );
}
// Class component
/*import { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Counter: 0,
      date: undefined,
      age: 24,
    };
  }
  /* usage de la fonction shouldComponentUpdate() ex. on a un props age qu'on va utiliser pour une base de données users et on a pas  pas besoin d'afficher ce user, et si cet age change on a pas besoin d'appeler le render():*/
/*  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(nextState, this.state);
    if (nextState.age !== this.state.age) {
      return false;
    }
    return true;
  }

  incrementUp = () => {
    this.setState((prevState) => ({ Counter: prevState.Counter + 1 }));
  };
  incrementDown = () => {
    this.setState((prevState) => ({ Counter: prevState.Counter - 1 }));
  };
  ResetIncrement = () => {
    this.setState(() => ({ Counter: 0 }));
  };
  render() {
    return (
      <>
        <div>Il y'a {this.state.Counter} secondes</div>
        <br></br>
        <button onClick={this.incrementUp}>UP</button>
        <br></br>
        <button onClick={this.incrementDown}>Down</button>
        <br></br>
        <button onClick={this.ResetIncrement}>Rest</button>
      </>
    );
  }
}
*/
