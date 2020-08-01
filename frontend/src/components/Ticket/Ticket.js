import React from 'react';
import './Ticket.style.sass';
import GiveIcon from '../DynamicIcon/DynamicIcon';
import Button from '../Button/Button';

function Ticket({ title, description, iconName, buttonText, canEdit }) {
  return (
    <div className="admin_container">
      <div className="admin_icon">
        <GiveIcon icon={iconName} />
      </div>
      <div className="admin_content">
        <h1 className="admin_title">{title}</h1>
        <p className="admin_description">{description}</p>
      </div>
      <div className="btns">
        <Button buttonStyle="btn--danger--solid">{buttonText}</Button>
        {canEdit ? (
          <Button buttonStyle="btn--danger--solid--btn">{buttonText}</Button>
        ) : null}
      </div>
    </div>
  );
}

export default Ticket;
