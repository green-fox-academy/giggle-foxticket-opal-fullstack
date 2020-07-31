import React from 'react';
import './TicketList.styles.sass';
import AdminTicket from './AdminTicket';

const ticketTypes = [
  {
    id: 1,
    title: 'Ticket-Types A',
    description: 'Lorem Ipsum has been the industry s standard dummy',
    iconName: 'FaBeer',
    buttonText: 'BUY',
  },
  {
    id: 2,
    title: 'Ticket-Types B',
    description: 'Since the 1500s,when an unknown printer took a galley',
    iconName: 'FaRegSmileWink',
<<<<<<< HEAD
=======
    buttonText: 'BUY',
>>>>>>> GFO-148-dirty
  },
  {
    id: 3,
    title: 'Ticket-Types C',
    description: 'Remaining  essentially unchanged. It was popularised',
    iconName: 'FaRegGem',
<<<<<<< HEAD
=======
    buttonText: 'BUY',
>>>>>>> GFO-148-dirty
  },
  {
    id: 4,
    title: 'Ticket-Types D',
    description: 'Contrary to popular Lorem Ipsum is not  random text',
    iconName: 'FaUmbrella',
<<<<<<< HEAD
=======
    buttonText: 'BUY',
>>>>>>> GFO-148-dirty
  },
];

const TicketList = () => {
  return (
    <div className="ticket-list-container">
      <div className="ticket-list">
        <h1 className="main-title">Ticket Types</h1>
        {ticketTypes.map(i => (
          <AdminTicket key={i.id} {...i} />
        ))}
      </div>
    </div>
  );
};

export default TicketList;
