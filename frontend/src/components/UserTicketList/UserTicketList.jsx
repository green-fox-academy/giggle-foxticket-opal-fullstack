import React from 'react';
import Ticket from '../Ticket/Ticket';
import Button from '../Button/Button';

const userTickets = [
  {
    id: 1,
    description: 'Not validated',
    iconName: 'FaBeer',
    title: 'Single ticket',
  },
  {
    id: 2,
    description: 'Valid until ...',
    iconName: 'FaRegSmileWink',
    title: 'Double ticket',
  },
  {
    id: 3,
    description: 'Expired',
    iconName: 'FaRegGem',
    title: 'Triple Ticket',
  },
];

const UserTicketList = () => {
  return (
    <div className="ticket-list-container">
      <div className="ticket-list">
        <h1 className="main-title">My tickets</h1>
        {userTickets.map(userTicket => (
          <Ticket key={userTicket.id} {...userTicket}>
            <Button buttonStyle="btn--warning--solid">SHOW</Button>
          </Ticket>
        ))}
      </div>
    </div>
  );
};

export default UserTicketList;