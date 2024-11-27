// ... existing code ...

// fonction pour valider le formulaire:
const validateForm = () => {
  // Réinitialiser les erreurs
  setError([])
  
  const nameValue = NameRef.current.value
  const emailValue = EmailRef.current.value
  const messageValue = MessageRef.current.value
  const acceptValue = AcceptRef.current.checked

  let isValid = true

  // valider le champ du name:
  if (nameValue.trim() === '') {
    setError(prevState => {
      return [...prevState, { NameRef: [`Name field is required`] }]
    })
    NameRef.current.style.border = '1px solid red'
    isValid = false
  } else {
    NameRef.current.style.border = '1px solid #ced4da'
  }

  // valider le champ email:
  if (emailValue.trim() === '') {
    setError(prevState => {
      return [...prevState, { EmailRef: [`Email field is required`] }]
    })
    EmailRef.current.style.border = '1px solid red'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    setError(prevState => {
      return [...prevState, { EmailRef: [`Invalid email format`] }]
    })
    EmailRef.current.style.border = '1px solid red'
    isValid = false
  } else {
    EmailRef.current.style.border = '1px solid #ced4da'
  }

  // valider le champ message:
  if (messageValue.trim() === '') {
    setError(prevState => {
      return [...prevState, { MessageRef: [`Message field is required`] }]
    })
    MessageRef.current.style.border = '1px solid red'
    isValid = false
  } else {
    MessageRef.current.style.border = '1px solid #ced4da'
  }

  // valider la checkbox:
  if (!acceptValue) {
    setError(prevState => {
      return [...prevState, { AcceptRef: [`You must accept the rules`] }]
    })
    AcceptRef.current.style.outline = '1px solid red'
    isValid = false
  } else {
    AcceptRef.current.style.outline = 'none'
  }

  return isValid
}

// fonction pour handler la soumission du formulaire:
const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    const formData = {
      name: NameRef.current.value,
      email: EmailRef.current.value,
      message: MessageRef.current.value,
      accepted: AcceptRef.current.checked
    }
    console.log('Form data:', formData)
    setIsFormSent(true)
    resetForm()
  }
};

// ... existing code ...
