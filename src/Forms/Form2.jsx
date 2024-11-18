import { useState } from "react";
export default function Form2() {


    // pour récupérer le nom et l'age :
    // const [inputName, setInputName] = useState("");
    // const [inputAge, setInputAge] = useState("");
    // const [acceptChange, setAcceptChange] = useState(false);
    const [formValues, setFormValues] = useState({ name: "", age: "", city: "", country: "", accept: false });
    // const [city, setCity] = useState("");
    // const handleNameInputChange = () => {
    //     const name = document.getElementById("name").value;
    //     setInputName(name);
    //     console.log(name, inputName);
    // };
    const handleInputChange = (e) => {
        const currentTarget = e.currentTarget;
        const id = e.currentTarget.id;
        let value = e.currentTarget.value;
        if (currentTarget.type === "checkbox") {
            value = e.currentTarget.checked;
        }
        setFormValues({ ...formValues, [id]: value });
        console.log(formValues);
    };
    // const handleAgeInputChange = () => {
    //     const age = document.getElementById("age").value;
    //     setInputAge(age);
    //     console.log(age, inputAge);
    // };
    // const handleAcceptChange = () => {
    //     const accept = document.getElementById("accept").checked;
    //     setAcceptChange(accept);
    //     console.log(accept, acceptChange);
    // };
    return (
        
        <div className="container my-5">
            <img
                src="/public/images/PrinceArabia.png"
                alt="Description de l'image"
                className="fixed top-0 left-0 w-full h-full object-cover" // Exemple de classes
            />
            <form>
                {JSON.stringify(formValues)}
                <div className="form-group p-2">
                    <label>Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        className="form-control"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input
                        type="text"
                        id="age"
                        placeholder="Age"
                        className="form-control"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input
                        type="text"
                        id="city"
                        placeholder="City"
                        className="form-control"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <label htmlFor="country" className="form-label">
                    </label>
                    <select
                        id="country"
                        className="form-control"
                        onChange={handleInputChange}
                    >
                        <option value="fr">France</option>
                        <option value="Mr">Morocco</option>
                        <option value="al">Algeria</option>
                        <option value="tu">Tunisia</option>:
                    </select>
                </div>
                <div className="form-check my-2">
                    <input
                        type="checkbox"
                        id="accept"
                        className="form-check-input"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="accept" className="form-check-label">
                        Accept our rules
                    </label>
                </div>
                <div className="form-group my-4">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}
