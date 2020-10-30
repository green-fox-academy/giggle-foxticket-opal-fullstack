import React from 'react';
import './Ticket.style.sass';
import GiveIcon from '../DynamicIcon/DynamicIcon';
import PropTypes from 'prop-types';

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

Ticket.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  iconName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Ticket;
