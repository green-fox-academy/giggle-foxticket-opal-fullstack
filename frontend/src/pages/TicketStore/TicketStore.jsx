import React from 'react';
import ShopTicketList from '../../components/ShopTicketList/ShopTicketList';
import UserTicketList from '../../components/UserTicketList/UserTicketList';

const TicketStore = () => {
  return (
    <div className="ticket-store">
      <Header type="user" />
      <ShopTicketList />
      <UserTicketList />
    </div>
  );
};

export default TicketStore;
