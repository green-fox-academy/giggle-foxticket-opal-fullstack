import React, { useEffect, useState } from 'react';
import Ticket from '../Ticket/Ticket';
import Button from '../Button/Button';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getTickets, updateTicket } from '../../flux/actions/ticketActions';
import PropTypes from 'prop-types';
import QR from '../QR/QR';
import Modal from '../Modal/Modal';
import useModal from '../../hooks/useModal';
import './UserTicketList.styles.sass';

const UserTicketList = props => {
  const tickets = useSelector(state => state.ticket.tickets);
  const { isShowing, toggle } = useModal();
  const [QR_id, setQR_id] = useState(0);
  const dispatch = useDispatch();

  console.log('tickets', tickets);

  const handleUpdate = (order_id, ticket_status, ticketId) => {
    dispatch(updateTicket(order_id, ticket_status));
    setQR_id(ticketId);
    setTimeout(function () {
      dispatch(getTickets);
    }, 100);
  };

  useEffect(() => {
    dispatch(getTickets);
  }, [getTickets]);

  console.log(tickets);
  return (
    <>
      {tickets.length > 0 && (
        <div className="ticket-list-container">
          <div className="ticket-list">
            <h1 className="main-title">My tickets</h1>
            {tickets.map(ticket => (
              <Ticket key={ticket.id} {...ticket}>
                {ticket.ticket_status !== 'active' ? (
                  <Button
                    buttonStyle="btn--warning--solid"
                    onClick={() => {
                      handleUpdate(ticket.order_id, 'active');
                    }}
                  >
                    PAY
                  </Button>
                ) : (
                  <Button
                    buttonStyle="btn--warning--solid"
                    onClick={() => {
                      setQR_id(ticket.id);
                      toggle();
                    }}
                  >
                    SHOW QR
                  </Button>
                )}
              </Ticket>
            ))}
            <Modal hide={toggle} isShowing={isShowing}>
              <div onClick={toggle}>
                <QR id={QR_id} />
              </div>
            </Modal>
          </div>
        </div>
      )}
      {tickets.length === 0 && (
        <div className="ticket-list-container">
          <div className="ticket-list">
            <h1 className="main-title">You don't have tickets yet : (</h1>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  error: state.error,
});

UserTicketList.propTypes = {
  getTickets: PropTypes.func,
};

export default connect(mapStateToProps, {
  getTickets,
  updateTicket,
})(UserTicketList);
