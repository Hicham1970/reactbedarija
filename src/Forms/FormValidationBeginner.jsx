/* eslint-disable no-unused-vars */
import React from "react";
import { useRef, useState } from "react"

function FormValidationBeginner() {
  // recuperation des champs du formulaire:
  const NameRef = useRef()
  const EmailRef = useRef()
  const MessageRef = useRef()
  const CountryRef = useRef()
  const AcceptRef = useRef()
  const [errors, setErrors] = useState([])
  // fonction de validation du formulaire:
  const validateForm = () => {
    // recuperation des valeurs des champs:
    const name = NameRef.current.value
    const email = EmailRef.current.value
    const message = MessageRef.current.value
    const country = CountryRef.current.value
    const accept = AcceptRef.current.checked
    let isFormValid = true

    // validation des champs:
    if (name.trim() === "") {
      setErrors(previous => {
        return [...previous, "Name is required"]
      })
      isFormValid = false
    }
    if (email.trim() === "") {
      setErrors(previous => {
        return [...previous, "Email is required"]
      })
      isFormValid = false
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors(previous => {
        return [...previous, "Email is not valid"]
      })
      isFormValid = false
    }
    if (message.trim() === "") {
      setErrors(previous => {
        return [...previous, "Message is required"]
      })
      isFormValid = false
    }
    if (country.trim() === "") {
      setErrors(previous => {
        return [...previous, "Country is required"]
      })
      isFormValid = false
    }
    if (!accept) {
      setErrors(previous => {
        return [...previous, "You must accept our rules"]
      })
      isFormValid = false
    }

    return isFormValid

  }
  // fonction de soumission du formulaire:
  const handleSubmit = (e) => {
    setErrors([])
    //Si le formulaire n'est pas valide, on ne soumet pas le formulaire:
    if (!validateForm()) {
      e.preventDefault()
    }
    //Si le formulaire est valide, on soumet le formulaire:
    else {
      // on l'envoie a la base données par exemple et on donne un feedback:
      alert("Form submitted successfully")
    }

  }
  return (
    <div className="container-fluid w-75 mx-auto my-5">
      {errors.length > 0 ?
        <div className="alert alert-danger" role="alert">
          <strong>Please fix the following errors:</strong>
          <ul>
            {errors.map((error, index) => <li key={index}>{error}</li>)}
          </ul>
        </div>
        : ""}
      <form onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <hr />
        {/* /**------Name input------- */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input type="text" className="form-control" id="name" ref={NameRef} />
        </div>
        {/* /**------Email input------- */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input type="text" className="form-control" id="email" ref={EmailRef} />
        </div>
        {/* /**------Message input------- */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="message" >
            Message
          </label>
          <textarea className="form-control" id="message" ref={MessageRef}></textarea>
        </div>
        {/* /**------Select country input------- */}
        <div className="form-group">
          <label>Country</label>
          <label htmlFor="country" className="form-label"></label>
          <select id="country" className="form-control" ref={CountryRef}>
            <option value="fr">France</option>
            <option value="Mr">Morocco</option>
            <option value="al">Algeria</option>
            <option value="tu">Tunisia</option>:
          </select>
        </div>
        {/* /**------Checkbox------- */}
        <div className="form-check my-2">
          <input type="checkbox" id="accept" className="form-check-input" ref={AcceptRef} />
          <label htmlFor="accept" className="form-check-label" >
            Accept our rules
          </label>
        </div>
        <div className="form-group  my-4">
          <button
            type="submit"
            className="btn btn-warning fw-bold w-75 mx-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormValidationBeginner;
