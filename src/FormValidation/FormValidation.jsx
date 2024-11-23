import React from "react";
import { useRef, useState } from "react";

function FormValidation() {
  const NameRef = useRef();
  const EmailRef = useRef();
  const MessageRef = useRef();
  const AcceptRef = useRef();
  const [isFormSent, setIsFormSent] = useState(false);
  const [error, setError] = useState([])
  // fonction pour vider le formulaire:
  const resetForm=()=>{
    NameRef.current.value=""
    EmailRef.current.value=""
    MessageRef.current.value=""
    AcceptRef.current.checked=false

  }
  // fonction pour afficher les erreurs:
  const displayErrors=()=>{
    return error.map((err)=>{
      return <li>{err.field }:{err.message}</li>
    })
  }
  // fonction pour valider le formulaire:
  const validateForm=()=>{
    const nameValue = NameRef.current.value
    const emailValue = EmailRef.current.value
    const messageValue = MessageRef.current.value
    const acceptValue = AcceptRef.current.checked

    // valider le champ du name:
    if(nameValue.trim()===''){
      setError(prevState=>{
        return [...prevState,{field:`NameRef`,message:[`Name Field required`]}]
      })
      NameRef.current.style.border='1px solid red'
    }
    // valider le champ du name:
    if (emailValue.trim() === '') {
      setError(prevState => {
        return [...prevState, { field: `EmailRef`, message: [` EmailField required`] }]
      })
      EmailRef.current.style.border = '1px solid red'
    }
    // valider le champ du message:
    if (messageValue.trim() === '') {
      setError(prevState => {
        return [...prevState, { field: `MessageRef`, message: [` MessageField required`] }]
      })
      MessageRef.current.style.border = '1px solid red'
    }
    // valider le checkbox: 
    if (!acceptValue) {
      setError(prevState => {
        return [...prevState, { field: `AcceptRef`, message: [` AcceptField required`] }]
      })
      AcceptRef.current.style.border = '1px solid red'
    }
  }
  // fonction pour handler la soumission du formulaire:
  const handleSubmit = (e) => {
    e.preventDefault();
    const nameValue = NameRef.current.value
    const emailValue = EmailRef.current.value
    const messageValue = MessageRef.current.value
    const acceptValue = AcceptRef.current.checked
    console.log({ nameValue, emailValue, messageValue, acceptValue })
    // setIsFormSent(true)
    // resetForm()
    validateForm()
  };
  return (
    <div className="container-fluid w-75 mx-auto my-5">
      {/* /**------Error message------- */}
      {error.length > 0 ?
        <div className="alert alert-danger">
          <strong>Error</strong>
          <ul>
            {displayErrors()}
          </ul>
        </div>
      : ""}
    {/* {JSON.stringify(error)} */}
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
