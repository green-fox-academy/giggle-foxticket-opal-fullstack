import React from 'react';
import TicketType from './Ticket';

const fakeData = [
  {
    id: 1,
    title: 'Ticket-Types A',
    description: 'asdf,ffff,f,f,f,f,f,fffffdrdbdb kjbk ',
  },
  {
    id: 2,
    title: 'Ticket-Types B',
    description: 'asdf,ffff,f,f,f,f,f,fffffdrdbdbsefwa ',
  },
  {
    id: 3,
    title: 'Ticket-Types C',
    description: 'asdf,ffff,f,f,f,f,f,fffffdrdbdbfdsf ',
  },
  {
    id: 4,
    title: 'Ticket-Types D',
    description: 'asdf,ffff,f,f,f,f,f,fffffdrdbdbwtg ',
  },
];

const toRender = fakeData.map(i => {
  return <TicketType key={i.id} {...i} />;
});

function TicketTypes() {
  return (
    <div>
      {toRender}
    </div>
  );
}

export default TicketTypes;
