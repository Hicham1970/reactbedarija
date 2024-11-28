import React from "react";
import { useRef, useState, useEffect,useCallback  } from "react";

function FormValidation() {
  const name = useRef({});
  const email = useRef({});
  const message = useRef({});
  const accept = useRef({});
  const [isFormSent, setIsFormSent] = useState(false);
  const [error, setError] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // fonction pour vider le formulaire:
  const resetForm=()=>{
    name.current.value=""
    email.current.value=""
    message.current.value=""
    accept.current.checked=false

  }
  
  // fonction pour valider le formulaire:
  const validateForm=useCallback(()=>{
    setError([])
    const nameValue = name.current.value
    const emailValue = email.current.value
    const messageValue = message.current.value
    const acceptValue = accept.current.checked
    let isValid = true
    // valider le champ du name:
    if(nameValue.trim()===''){
    setError(prevState=>{
        return { 
          ...prevState,
          ...{name: ` NameField required`}
      } 
      })
  
      isValid = false
    } 
    // valider le champ du name:
    if (emailValue.trim() === '') {
      setError(prevState => {
        return {
          ...prevState,
          ...{email: ` EmailField required`}
        } 
      })
    
      isValid = false
      } else if (!/^[A-Z0-9._%+2-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailValue)) {
      setError(prevState =>{return {
        ...prevState,
        ...{email: [`This email is not correct`]}
      }
      })
      isValid = false
      
    } 
    // valider le champ du message:
    if (messageValue.trim() === '') {
      setError(prevState => {
        return {
          ...prevState,
          ...{message: ` MessageField can not be empty`}
        }
      })
      isValid = false
    }
    // valider le checkbox: 
    if (!acceptValue) {
      setError(prevState => {
        return {
          ...prevState,
          ...{accept: `The Checkbox must be checked`}
        }
      })
     
      isValid = false
    }
    setIsSubmitted(isSubmitted=>true)
    return isValid
  },[name, email, message, accept])
  
  useEffect(() => {
    if (isSubmitted) {
      validateForm()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitted,validateForm])

  const handleChange = () => {
    validateForm()
   }
  // fonction pour handler la soumission du formulaire:
  function handleSubmit(e) {
    e.preventDefault();
    setIsFormSent(false);
    if (validateForm()) {
      setIsFormSent(true);
      resetForm();
      setError({})
    }
  }

  // fonction pour afficher les erreurs individuelles se compose de 3 fonction:
  const getError = (fieldName) => {
    return error[fieldName]
  }
  const hasError = (fieldName) => {
    return getError(fieldName) !== undefined
  }
  const handleShowError = (fieldName) => {
    // console.log(fieldName)  
    const champs = document.querySelector(`#${fieldName}`)
    if (hasError(fieldName)) {
      champs.style.border = "1px solid red"
      return <div className="text-muted ">{getError(fieldName)}</div>
    }
    if (champs !== undefined && champs !== null) {
      document.querySelector(`#${fieldName}`).removeAttribute("style")
}
   }
  // fonction pour afficher les erreurs:
  const displayErrors = () => {
    if (Object.keys(error).length === 0 && Object.values(error).every(val => val === undefined)) {
      return null; // ou un élément vide
    }
    return Object.entries(error).map((err) => {
      const [field, message] = err
      return <li key={field}>{field}:{message}</li>
    })
  }
 

  return (
    <div className="container-fluid w-75 mx-auto my-5">
      {/* /**------Error message------- */}
      {Object.keys(error).length > 0 ?
        <div className="alert alert-danger">
          <strong>Error</strong>
          <ul>
            {displayErrors()}
          </ul>
        </div>
      : ""}
    {/* {isValid.toString()} */}
      {/* /**------Success message if form is sent------- */}
      {isFormSent ?
        <div className="alert alert-success" role="alert">
          <strong>Success</strong> <br />The message was sent successfully
        </div>
        : ""}


      {/* /**------Form------*/}
      <form onSubmit={handleSubmit}>
        <h1>Contact Form Validation</h1>
        <hr />
        {/* /**------Name input------- */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input type="text" className="form-control" id="name" ref={name} onChange={handleChange} />
          {handleShowError("name")}
        </div>
        {/* /**------Email input------- */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            ref={email}
            onChange={handleChange}
          />
          {handleShowError("email")}
        </div>
        {/* /**------Message input------- */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            ref={message}
            onChange={handleChange}
          ></textarea>
          {handleShowError("message")}
        </div>

        {/* /**------Checkbox------- */}
        <div className="form-check my-2">
          <input
            type="checkbox"
            id="accept"
            className="form-check-input"
            ref={accept}
            onChange={handleChange}
          />
          <label htmlFor="accept" className="form-check-label">
            Accept our rules
          </label>
          {handleShowError("accept")}
        </div>
        <div className="form-group  my-4">
          <button
            type="submit"
            disabled={!isSubmitted}
            className="btn btn-warning fw-bold w-75 mx-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormValidation;
