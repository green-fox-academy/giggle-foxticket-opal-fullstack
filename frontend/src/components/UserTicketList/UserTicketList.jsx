import React from 'react';
import Ticket from '../Ticket/Ticket';

const userTicketTypes = [
  {
    id: 1,
    description: 'Not validated',
    iconName: 'FaBeer',
  },
  {
    id: 2,
    description: 'Valid until ...',
    iconName: 'FaRegSmileWink',
  },
  {
    id: 3,
    description: 'Expired',
    iconName: 'FaRegGem',
  },
];

const UserTicketList = () => {
  return (
    <div className="ticket-list-container">
      <div className="ticket-list">
        <h1 className="main-title">My tickets</h1>
        {userTicketTypes.map(userTicket => (
          <Ticket
            key={userTicket.id}
            {...userTicket}
            canEdit={false}
            buttonText="SHOW"
            title="Single ticket"
          />
        ))}
      </div>
    </div>
  );
};

export default UserTicketList;
