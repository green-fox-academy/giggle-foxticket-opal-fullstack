import React, { useState, useEffect } from 'react';
import './ShopTicketList.styles.sass';
import Ticket from '../Ticket/Ticket';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import useModal from '../../hooks/useModal';
import { addTicket } from '../../flux/actions/ticketActions';
import { connect, useDispatch } from 'react-redux';
import { getTickets } from '../../flux/actions/ticketActions';

const shopTicketTypes = [
  {
    id: 1,
    name: 'Ticket-Types A',
    price: 300,
    description: 'ezt majd ird at',
    icon: 'FaTicketAlt',
  },
  {
    id: 2,
    name: 'Ticket-Types B',
    price: 300,
    description: 'meg ezt is',
    icon: 'FaTicketAlt',
  },
  {
    id: 3,
    name: 'Ticket-Types C',
    price: 300,
    description: 'atirtam',
    icon: 'FaTicketAlt',
  },
  {
    id: 4,
    name: 'Ticket-Types D',
    price: 300,
    description: 'ezt is atirtam',
    icon: 'FaTicketAlt',
  },
];

const ShopTicketList = props => {
  const dispatch = useDispatch();
  const [ticketId, setTicketId] = useState(0);
  const { isShowing, toggle } = useModal();
  const { downloadTickets } = props;

  const handleUpdate = ticketId => {
    dispatch(getTickets);
    dispatch(addTicket(ticketId));
  };

  /* useEffect(() => {
    downloadTickets();
  }, dispatch); */

  return (
    <div className="ticket-list-container">
      <div className="ticket-list">
        <h1 className="main-title">Ticket Types</h1>
        {shopTicketTypes.map(shopTicket => (
          <Ticket key={shopTicket.id} {...shopTicket}>
            <Button
              onClick={() => {
                setTicketId(shopTicket.id);
                toggle();
              }}
            >
              BUY
            </Button>
          </Ticket>
        ))}
        <Modal hide={toggle} isShowing={isShowing}>
          <Button
            onClick={() => {
              handleUpdate(ticketId);
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

const mapDispatchToProps = dispatch => {
  return {
    downloadTickets: () => dispatch(getTickets),
  };
};

export default connect(null, mapDispatchToProps)(ShopTicketList);
