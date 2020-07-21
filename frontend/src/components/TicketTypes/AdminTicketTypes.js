import React from 'react';
import AdminTicket from './AdminTicket';
import './AdminTicketTypes.style.sass';

const fakeData = [
  {
    id: 1,
    title: 'Ticket-Types A',
    description: 'Lorem Ipsum has been the industry s standard dummy',
    iconName: 'FaBeer',
  },
  {
    id: 2,
    title: 'Ticket-Types B',
    description:'Since the 1500s,when an unknown printer took a galley',
    iconName: 'FaRegSmileWink',
  },
  {
    id: 3,
    title: 'Ticket-Types C',
    description:'Remaining  essentially unchanged. It was popularised',
    iconName: 'FaRegGem',
  },
  {
    id: 4,
    title: 'Ticket-Types D',
    description: 'Contrary to popular Lorem Ipsum is not  random text',
    iconName: 'FaUmbrella',
  },
];

function AdminTicketTypes() {
  return (
    <div>
      <h1 className="main-title">Ticket Types</h1>
      {fakeData.map(i => (
        <AdminTicket key={i.id} {...i} />
      ))}
    </div>
  );
}

export default AdminTicketTypes;
