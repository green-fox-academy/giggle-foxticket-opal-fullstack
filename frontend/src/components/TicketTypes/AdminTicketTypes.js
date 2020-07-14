import React from 'react';
import AdminTicket from './AdminTicket';
import './AdminTicketTypes.style.sass'

const fakeData = [
  {
    id: 1,
    title: 'Ticket-Types A',
    description: 'asdf,ffff,f,f,f,f,f,fffffdrdbdb kjbk ',
    iconName:'faAd'
  },
  {
    id: 2,
    title: 'Ticket-Types B',
    description: 'asdf,ffff,f,f,f,f,f,fffffdrdbdbsefwa ',
    iconName:'faAdjust'

  },
  {
    id: 3,
    title: 'Ticket-Types C',
    description: 'asdf,ffff,f,f,f,f,f,fffffdrdbdbfdsf ',
    iconName:'faCheck'

  },
  {
    id: 4,
    title: 'Ticket-Types D',
    description: 'asdf,ffff,f,f,f,f,f,fffffdrdbdbwtg ',
    iconName:'faAddressBook'

  },
];

function AdminTicketTypes() {
  return (
    <div>
      <h1 className="main-title">Ticket Types</h1>
      {fakeData.map(i => <AdminTicket key={i.id} {...i} />)}
    </div>
  );
}

export default AdminTicketTypes;
