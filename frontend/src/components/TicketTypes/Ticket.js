import React from 'react';
import { FaCircle } from 'react-icons/fa';

function TicketType({ title, description }) {
  return (
    <div className="container">
      <FaCircle />
      <h1>{title}</h1> <p>{description}</p>
      <button className="edit"> EDIT </button>
      <button className="delete"> DELETE </button>
    </div>
  );
}
export default TicketType;
