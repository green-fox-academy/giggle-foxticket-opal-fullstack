import React from 'react';
import './Ticket.style.sass';
import GiveIcon from '../DynamicIcon/DynamicIcon';
import PropTypes from 'prop-types';

function Ticket({ name, price, description, icon, ticket_status, ...props }) {
  //console.log('ticketben icon', icon);
  return (
    <div className="admin_container">
      <div className="admin_icon">
        <GiveIcon icon={icon} />
      </div>
      <div className="admin_content">
        <h1 className="admin_title">{name}</h1>
        <h5 className="admin_description">Price: {price} HUF</h5>
        <h5 className="admin_description">Description: {description}</h5>
        {ticket_status && (
          <h5
            className="admin_description"
            style={
              ticket_status == 'active'
                ? { color: '#3cb878d9' }
                : { color: 'red' }
            }
          >
            Status: {ticket_status}
          </h5>
        )}
      </div>
      <div className="btns">{props.children}</div>
    </div>
  );
}

Ticket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Ticket;
