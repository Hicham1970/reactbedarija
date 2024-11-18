import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // pour récupérer le nom:
  const handleNameInputChange = () => {
    const name = document.getElementById("name").value;
    setName(name);
  };
  const handleAgeInputChange = () => {
    const age = document.getElementById("age").value;
    setAge(age);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // pour récupérer le nom et l'age dans la console:
    console.log({ name, age });
  };

  return (
    <div className="center">
      <forme>
        <input
          type="text"
          id="name"
          onChange={handleNameInputChange}
          placeholder="Name"
        ></input>
        <input
          type="number"
          onChange={handleAgeInputChange}
          id="age"
          placeholder="Age"
        ></input>
        <br></br>
        <input type="submit" onClick={handleSubmit}></input>
      </forme>
    </div>
  );
}

export default Form;
