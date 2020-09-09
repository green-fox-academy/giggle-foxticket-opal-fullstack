import React from 'react';
import './ShopTicketList.styles.sass';
import Ticket from '../Ticket/Ticket';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import useModal from '../../hooks/useModal';

const shopTicketTypes = [
  {
    id: 1,
    title: 'Ticket-Types A',
    description: 'Lorem Ipsum has been the industry s standard dummy',
    iconName: 'FaBeer',
  },
  {
    id: 2,
    title: 'Ticket-Types B',
    description: 'Since the 1500s,when an unknown printer took a galley',
    iconName: 'FaRegSmileWink',
  },
  {
    id: 3,
    title: 'Ticket-Types C',
    description: 'Remaining  essentially unchanged. It was popularised',
    iconName: 'FaRegGem',
  },
  {
    id: 4,
    title: 'Ticket-Types D',
    description: 'Contrary to popular Lorem Ipsum is not  random text',
    iconName: 'FaUmbrella',
  },
];

const ShopTicketList = () => {
  const { isShowing, toggle } = useModal();

  return (
    <div className="ticket-list-container">
      <div className="ticket-list">
        <h1 className="main-title">Ticket Types</h1>
        {shopTicketTypes.map(shopTicket => (
          <Ticket key={shopTicket.id} {...shopTicket}>
            <Button onClick={toggle}>BUY</Button>
          </Ticket>
        ))}
        <Modal hide={toggle} isShowing={isShowing}>
          <Button onClick={toggle}>OK</Button>
          <Button
            buttonStyle={'btn--danger--solid--btn'}
            id="modal-btn"
            onClick={toggle}
          >
            Cancel
          </Button>
          Are you sure?
        </Modal>
      </div>
    </div>
  );
};

export default ShopTicketList;
