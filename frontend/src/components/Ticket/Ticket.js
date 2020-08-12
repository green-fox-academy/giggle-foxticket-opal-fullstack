import React from 'react';
import './Ticket.style.sass';
import GiveIcon from '../DynamicIcon/DynamicIcon';

function Ticket({ title, description, iconName, ...props }) {
  return (
    <div className="admin_container">
      <div className="admin_icon">
        <GiveIcon icon={iconName} />
      </div>
      <div className="admin_content">
        <h1 className="admin_title">{title}</h1>
        <p className="admin_description">{description}</p>
      </div>
      <div className="btns">{props.children}</div>
    </div>
  );
}

export default Ticket;
