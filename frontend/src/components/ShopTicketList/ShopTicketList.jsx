import React, { useState } from 'react';
import './ShopTicketList.styles.sass';
import Ticket from '../Ticket/Ticket';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import useModal from '../../hooks/useModal';
import { useDispatch } from 'react-redux';
import { addTicket } from '../../flux/actions/ticketActions';

const shopTicketTypes = [
  {
    id: 1,
    title: 'Ticket-Types A',
    description: 'ezt majd ird at',
    iconName: 'FaTicketAlt',
  },
  {
    id: 2,
    title: 'Ticket-Types B',
    description: 'meg ezt is',
    iconName: 'FaTicketAlt',
  },
  {
    id: 3,
    title: 'Ticket-Types C',
    description: 'Remaining  essentially unchanged. It was popularised',
    iconName: 'FaTicketAlt',
  },
  {
    id: 4,
    title: 'Ticket-Types D',
    description: 'Contrary to popular Lorem Ipsum is not  random text',
    iconName: 'FaTicketAlt',
  },
];

const ShopTicketList = () => {
  const dispatch = useDispatch();
  const [ticketId, setTicketId] = useState(0);
  const { isShowing, toggle } = useModal();

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
              dispatch(addTicket(ticketId));
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

export default ShopTicketList;
