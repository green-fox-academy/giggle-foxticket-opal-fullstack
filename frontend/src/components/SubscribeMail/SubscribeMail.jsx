import React, { useState } from 'react'
import mailImg from '../../assets/images/default-mail.svg'
import { FaExclamationTriangle } from 'react-icons/fa';
import './SubscribeMail.styles.sass'

export default function () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [validInput, setvalidInput] = useState(true);
  const [successMessage, setSuccessMessage] = useState({});
  
 
  const handleSubmit = e => {
    e.preventDefault();
    setSuccessMessage('')
    setvalidInput(true)
    if (name.length <= 3 || email.length <= 3) {
      setvalidInput(false);
      setSuccessMessage({})
    }else {
      const subscriber = { name, email };
      fetch('http://localhost:3000/api/subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriber)
      })
      .then(response => setSuccessMessage({statusText: response.statusText , statusCode: response.status}))
    }
  }
  
  const handleNameChange = (e) =>{
    setName(e.target.value)
  }

  const handleEmailChange = (e) =>{
    setEmail(e.target.value)
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
        { !validInput && 
        <p>
           Username and Email should be minimum 3 characters    
          <FaExclamationTriangle color="red" size="1.5em" />
          <i className="fas fa-exclamation-triangle"></i>
        </p>
        }
      </div>
      { successMessage.statusText &&  <p className={successMessage.statusCode === 201 ? 'msg success' : 'msg error'}>{successMessage.statusText}</p> }
      <button
        type="submit"
        className="btn">
        Subscribe!
      </button>  
    </form>      
  )
}
