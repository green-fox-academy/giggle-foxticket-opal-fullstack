import React, { useState } from 'react'
import mailImg from '../../assets/images/default-mail.svg'
import { FaExclamationTriangle } from 'react-icons/fa';
import './SubscribeMail.styles.sass'

export default function () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  
 
  const handleSubmit = e => {
    e.preventDefault();
    setSuccessMessage('')
    setIsValid(true)
    if (name.length <= 3 || email.length <= 3) {
      setIsValid(false);
    }else {
      const subscriber = { name, email };
      fetch('http://localhost:3000/api/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriber)
      })
      .then(response => response.status === 201 ? setSuccessMessage('success') : setSuccessMessage('error'))
    }
  }
  
  const handleNameChange = (e) =>{
    setName(e.target.value)
  }

  const handleEmailChange = (e) =>{
    setEmail(e.target.value)
  }

  const displayMessage = {
    display: successMessage === '' ? 'none' : 'block'
  }

  return (
    <form onSubmit={handleSubmit} className="subscription-form">
      <label>Subscribe to our newsletter!</label>
      <div className="emailImg">
        <img src={mailImg} alt="subscribe email"></img>
      </div>
      <div className="form-group">
        <input
          name="name" 
          placeholder="Your name"
          type="text"
          value={name}
          required
          onChange={handleNameChange}
        />
      </div>
      <div className="form-group">
        <input
          name="email"
          placeholder="Your email"
          type="email"
          value={email}
          required
          onChange={handleEmailChange}
        />
        <p className={` ${isValid ? 'isValid' : 'notValid'}`}>
          Username or Email is incorrect   
          <FaExclamationTriangle color="red" size="1.5em" />
        </p>
        <i className="fas fa-exclamation-triangle"></i>
      </div>
      <p style={displayMessage} className={successMessage === 'success' ? 'msg success' : 'msg error'} ></p>
      <button
        type="submit"
        className="btn">
        Subscribe!
      </button>  
    </form>      
  )
}
