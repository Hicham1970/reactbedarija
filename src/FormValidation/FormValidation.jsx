import React from "react";
import { useRef, useState, useEffect  } from "react";

function FormValidation() {
  const NameRef = useRef();
  const EmailRef = useRef();
  const MessageRef = useRef();
  const AcceptRef = useRef();
  const [isFormSent, setIsFormSent] = useState(false);
  const [error, setError] = useState({})
  
  // fonction pour vider le formulaire:
  const resetForm=()=>{
    NameRef.current.value=""
    EmailRef.current.value=""
    MessageRef.current.value=""
    AcceptRef.current.checked=false

  }
  // fonction pour afficher les erreurs:
  
  // fonction pour valider le formulaire:
  const validateForm=()=>{
    setError([])
    const nameValue = NameRef.current.value
    const emailValue = EmailRef.current.value
    const messageValue = MessageRef.current.value
    const acceptValue = AcceptRef.current.checked
    let isValid = true
    // valider le champ du name:
    if(nameValue.trim()===''){
    setError(prevState=>{
        return { 
          ...prevState,
          ...{NameRef: ` NameField required`}
      } 
      })
  
      isValid = false
    } 
    // valider le champ du name:
    if (emailValue.trim() === '') {
      setError(prevState => {
        return {
          ...prevState,
          ...{EmailRef: ` EmailField required`}
        } 
      })
    
      isValid = false
      } else if (!/^[A-Z0-9._%+2-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailValue)) {
      setError(prevState =>{return {
        ...prevState,
        ...{EmailRef: [`This email is not correct`]}
      }
      })
      isValid = false
      
    } 
    // valider le champ du message:
    if (messageValue.trim() === '') {
      setError(prevState => {
        return {
          ...prevState,
          ...{MessageRef: ` MessageField can not be empty`}
        }
      })
     
      isValid = false
    }
    // valider le checkbox: 
    if (!acceptValue) {
      setError(prevState => {
        return {
          ...prevState,
          ...{AcceptRef: `The Checkbox must be checked`}
        }
      })
     
      isValid = false
    }
    return isValid
  }
  useEffect(() => {console.log(error) },[error])
  // fonction pour handler la soumission du formulaire:
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(validateForm())
    if (validateForm()) {
      setIsFormSent(true)
      resetForm()
    }
  };
  // fonction pour afficher les erreurs individuelles:
  const handleShowError = (fieldName) => {
    const erreur = error[fieldName]
    if (erreur !==undefined) {
      return <div className={"text-muted "}>{erreur}</div>
     }
   }
  // fonction pour afficher les erreurs:
  const displayErrors = () => {
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
          <input type="text" className="form-control" id="name" ref={NameRef} />
          {handleShowError("NameRef")}
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
            ref={EmailRef}
          />
          {handleShowError("EmailRef")}
        </div>
        {/* /**------Message input------- */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            ref={MessageRef}
          ></textarea>
          {handleShowError("MessageRef")}
        </div>

        {/* /**------Checkbox------- */}
        <div className="form-check my-2">
          <input
            type="checkbox"
            id="accept"
            className="form-check-input"
            ref={AcceptRef}
          />
          <label htmlFor="accept" className="form-check-label">
            Accept our rules
          </label>
          {handleShowError("AcceptRef")}
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

export default FormValidation;
