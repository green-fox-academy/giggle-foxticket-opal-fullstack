import React from 'react';
import './Ticket.style.sass';
import GiveIcon from '../DynamicIcon/DynamicIcon';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import useModal from '../../hooks/useModal';
import QR from '../QR/QR';

function Ticket({id, title, description, iconName, userTicket, ...props }) {
  const { isShowing, toggle } = useModal();
  return (
    <div className="admin_container">
      <div className="admin_icon">
        <GiveIcon icon={iconName} />
      </div>
      <div className="admin_content">
        <h1 className="admin_title">{title}</h1>
        <p className="admin_description">{description}</p>
      </div>
      <div className="btns" onClick={toggle}>{props.children}</div>
      { userTicket &&
        <Modal hide={toggle} isShowing={isShowing}>
          <div className="TicketModal" onClick={toggle}>
            <QR id={id}/>
          </div>
        </Modal>
      }
    </div>
  );
}

Ticket.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  userTicket: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Ticket;
