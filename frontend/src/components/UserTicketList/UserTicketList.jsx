import React, {useEffect, useState } from 'react';
import Ticket from '../Ticket/Ticket';
import Button from '../Button/Button';
import { connect } from 'react-redux'
import { getTickets } from '../../flux/actions/ticketActions';
import PropTypes from 'prop-types';
import QR from '../QR/QR';
import Modal from '../Modal/Modal';
import useModal from '../../hooks/useModal';

const UserTicketList = (props) => {

  const {tickets , downloadTickets} = props
  const { isShowing, toggle } = useModal();
  const [QR_id, setQR_id] = useState(0);

  useEffect(() => {
    downloadTickets()
  },[downloadTickets])

  return (
    <>
      {tickets[0] && 
        <div className="ticket-list-container">
        <div className="ticket-list">
        <h1 className="main-title">My tickets</h1>
        {tickets.map(({id, ticket_status, expiration_date}) => (
          <Ticket
            key={id}
            title={ticket_status}
            description={expiration_date}
            iconName={'FaBeer'} >
            <Button buttonStyle="btn--warning--solid" onClick={() => {setQR_id(id); toggle();}}> SHOW </Button>
          </Ticket> 
        ))}
        <Modal hide={toggle} isShowing={isShowing}>
          <div onClick={toggle}>
            <QR id={QR_id} />
          </div>
        </Modal>
        </div>
        </div>
      }
      {!tickets[0] &&
        <div className="ticket-list-container">
        <div className="ticket-list">
        <h1 className="main-title">I don't have tickets2 yet : (</h1>
        <Button buttonStyle="btn--warning--solid">Buy Tickets</Button>
        </div></div>
      }
    </>
  );
};

const mapStateToProps = state => ({
  tickets: state.ticket.tickets,
  error: state.error,
});

const mapDispatchToProps = dispatch => {
  return {
    downloadTickets: () => dispatch(getTickets),
  }
};

UserTicketList.propTypes = {
  getTickets: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTicketList);
