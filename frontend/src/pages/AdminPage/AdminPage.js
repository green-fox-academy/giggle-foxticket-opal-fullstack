import React from 'react';
import Ticket from '../../components/Ticket/Ticket';
import './AdminPage.style.sass';

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

function AdminPage() {
  return (
    <div>
      <h1 className="main-title">Ticket Types</h1>
      {fakeData.map(adminTicket => (
        <Ticket key={adminTicket.id} {...adminTicket} canEdit={true} />
      ))}
    </div>
  );
}

export default AdminPage;
