import React, { useState, useEffect } from 'react';
import './ShopTicketList.styles.sass';
import Ticket from '../Ticket/Ticket';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import useModal from '../../hooks/useModal';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getTickets, addTicket } from '../../flux/actions/ticketActions';

const shopTicketTypes = [
  {
    id: 1,
    name: 'Mav',
    price: 350,
    description: 'Train Ticket',
    icon: 'FaTicketAlt',
  },
  {
    id: 2,
    name: 'Volan',
    price: 500,
    description: 'Bus Ticket',
    icon: 'FaTicketAlt',
  },
  {
    id: 3,
    name: 'BKK',
    price: 300,
    description: 'Public Transport Ticket',
    icon: 'FaTicketAlt',
  },
];

const ShopTicketList = props => {
  const dispatch = useDispatch();
  const [ticketId, setTicketId] = useState(0);
  const { isShowing, toggle } = useModal();
  const tickets = useSelector(state => state.ticket.tickets);
  console.log('shopticketlistben tickets useffect előtt', tickets);
  useEffect(() => {
    dispatch(getTickets);
  }, [getTickets]);

  console.log('shopticketlistben tickets useffect után', tickets);

  console.log(ticketId);
  const handleUpdate = ticketId => {
    dispatch(addTicket(ticketId));
    setTimeout(function () {
      dispatch(getTickets);
    }, 100);
  };

  return (
    <div className="ticket-list-container">
      <div className="ticket-list">
        <h1 className="main-title">Ticket Types</h1>
        {shopTicketTypes.map(shopTicket => (
          <Ticket key={shopTicket.id} {...shopTicket}>
            <Button
              onClick={() => {
                setTicketId(shopTicket.id);
                handleUpdate(ticketId);
              }}
            >
              BUY
            </Button>
          </Ticket>
        ))}
        <Modal hide={toggle} isShowing={isShowing}>
          <Button
            onClick={() => {
              toggle();
            }}
          >
            OK
          </Button>
          <Button buttonStyle={'btn--danger--solid--btn'} onClick={toggle}>
            Cancel
          </Button>
          <span>Are you sure?</span>
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps, {
  getTickets,
  addTicket,
})(ShopTicketList);
