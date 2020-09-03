import React from 'react';
import ShopTicketList from '../../components/ShopTicketList/ShopTicketList';
import UserTicketList from '../../components/UserTicketList/UserTicketList';
import Header from '../../components/Header/Header';
import { Provider } from 'react-redux';
import store from '../../flux/store';


const TicketStore = () => {
  return (
    <Provider store={store}>
    <div className="ticket-store">
      <Header type="user" />
      <ShopTicketList />
      <UserTicketList />
    </div>
    </Provider>
  );
};

export default TicketStore;
