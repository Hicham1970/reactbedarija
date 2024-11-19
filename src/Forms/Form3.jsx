import { useState, useEffect, useRef } from "react";
export default function Form3() {
    // Si on a besoin d afficher les données d'un tableau a chaque fois qu'elles changent=> useState, Sinon on utilise useRef hook
    // useRef hook est utilisé pour stocker les valeurs d'un tableau dans un objet et pour les modifier en temps réel dans le DOM (React)
    // useRef hook ne provoque pas de re-rendu du composant contrairement à useState hook
    // Dans cette exemple on va faire un tracking des 5 elements d'un formulaire
    const [submittedValues, setSubmittedValues] = useState(null); // État pour stocker les valeurs soumises
    const inputNameRef = useRef();
    const inputDateRef = useRef();
    const inputCityRef = useRef();
    const inputCountryRef = useRef();
    const inputAcceptRef = useRef();
    // eslint-disable-next-line no-unused-vars

    // Si on veut définir des valeurs par défaut:
    useEffect(() => {
        inputNameRef.current.value = "John Doe";
        inputDateRef.current.value = new Date().toISOString().slice(0, 10); // Format YYYY-MM-DD
        inputCountryRef.current.selectedIndex = 2; // Index de la valeur sélectionnée
        inputCityRef.current.focus()
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const valeurs = {
            name: inputNameRef.current.value,
            date: inputDateRef.current.value,
            city: inputCityRef.current.value,
            country: inputCountryRef.current.value,
            accept: inputAcceptRef.current.checked,
        };
        console.log(valeurs);

        setSubmittedValues(valeurs); // Mettre à jour l'état avec les valeurs soumises
    }


    return (
        <div className="container my-6 mx-15">
            <form onSubmit={handleSubmit}>
                <h3>Last Update</h3><hr />

                {new Date().toLocaleString()}
                {/* Afficher les valeurs après la soumission.  Avant cela, valeurs est undefined. */}
                <pre>{submittedValues ? JSON.stringify(submittedValues, null, 2) : "Aucune valeur soumise"}</pre> {/*  Affiche valeurs formaté */}
                <div className="form-group p-2">
                    <label>Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        className="form-control"
                        ref={inputNameRef}
                    />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input
                        type="text"
                        id="date"
                        placeholder="Date"
                        className="form-control"
                        ref={inputDateRef}
                    />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input
                        type="text"
                        id="city"
                        placeholder="City"
                        className="form-control"
                        ref={inputCityRef}
                    />
                </div>
                <div className="form-group">
                    <label>Country</label>
                    <label htmlFor="country" className="form-label"></label>
                    <select id="country" className="form-control" ref={inputCountryRef}>
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
                        ref={inputAcceptRef}
                    />
                    <label htmlFor="accept" className="form-check-label">
                        Accept our rules
                    </label>
                </div>
                <div className="form-group my-4">
                    <button type="submit" className="btn btn-primary" >Submit</button>
                </div>
            </form>
        </div>
    );
}
