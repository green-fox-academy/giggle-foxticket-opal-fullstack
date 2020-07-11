import React from 'react';
import './Ticket.style.sass';

import { FaCircle } from 'react-icons/fa';
import Button from '../Button/Button';
console.log(FaCircle);
function TicketType({ title, description }) {
  return (
    <div className="container">
      <div className="icon">
        <FaCircle style={{ fontSize: '3em', color: 'lightgreen' }} />
      </div>
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="btns">
        <Button buttonStyle="btn--danger--solid">Edit</Button>
        <Button buttonStyle="btn--danger--solid--btn">Delete</Button>
      </div>
    </div>
  );
}
export default TicketType;
