import React from 'react';
import './ShopTicketList.styles.sass';
import Ticket from '../Ticket/Ticket';

const shopTicketTypes = [
  {
    id: 1,
    title: 'Ticket-Types A',
    description: 'Lorem Ipsum has been the industry s standard dummy',
    iconName: 'FaBeer',
    buttonText: 'BUY',
    canEdit: false,
  },
  {
    id: 2,
    title: 'Ticket-Types B',
    description: 'Since the 1500s,when an unknown printer took a galley',
    iconName: 'FaRegSmileWink',
    buttonText: 'BUY',
    canEdit: false,
  },
  {
    id: 3,
    title: 'Ticket-Types C',
    description: 'Remaining  essentially unchanged. It was popularised',
    iconName: 'FaRegGem',
    buttonText: 'BUY',
    canEdit: false,
  },
  {
    id: 4,
    title: 'Ticket-Types D',
    description: 'Contrary to popular Lorem Ipsum is not  random text',
    iconName: 'FaUmbrella',
    buttonText: 'BUY',
    canEdit: false,
  },
];

const ShopTicketList = () => {
  return (
    <div className="ticket-list-container">
      <div className="ticket-list">
        <h1 className="main-title">Ticket Types</h1>
        {shopTicketTypes.map(shopTicket => (
          <Ticket key={shopTicket.id} {...shopTicket} />
        ))}
      </div>
    </div>
  );
};

export default ShopTicketList;
