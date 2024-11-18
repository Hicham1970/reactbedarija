import { useState } from "react";

export default function FruitsList() {
  const [fruit, setFruit] = useState("");
  const [fruitList, setFruitList] = useState([]);

  const displayFruits = () =>
    fruitList.map((fruit, index) => (
      <li key={index} className="listItems">
        {fruit}
      </li>
    ));

  const handleInput = (e) => {
    setFruit(e.target.value);
  };

  const handleAddFruits = (e) => {
    e.preventDefault();
    if (fruit.trim() !== "") {
      setFruitList([...fruitList, fruit]);
      setFruit("");
    }
  };

  return (
    <>
      <span>
        <form onSubmit={handleAddFruits}>
          <input type="text" value={fruit} onChange={handleInput} id="fruits" />
          <input type="submit" value="Add fruits" />
        </form>
      </span>
      <h1 className="h1">Fruits :</h1>
      <ul className="myList">{displayFruits()}</ul>
    </>
  );
}
