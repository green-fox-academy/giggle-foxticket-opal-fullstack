import React from 'react';
import './AdminPage.style.sass';
import Ticket from '../../components/Ticket/Ticket';
import Button from '../../components/Button/Button';
import useModal from '../../hooks/useModal';
import Modal from '../../components/Modal/Modal';
import Header from '../../components/Header/Header';
import { Provider } from 'react-redux';
import store from '../../flux/store';

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
  const { isShowing, toggle } = useModal();

  return (
    <Provider store={store}>
      <div>
        <Header type="admin" />
        <h1 className="main-title">Ticket Types</h1>
        {fakeData.map(adminTicket => (
          <Ticket key={adminTicket.id} {...adminTicket}>
            <Button onClick={toggle}>DELETE</Button>
          </Ticket>
        ))}
        <Modal hide={toggle} isShowing={isShowing}>
          <Button onClick={toggle}>OK</Button>
          <Button buttonStyle={'btn--danger--solid--btn'} onClick={toggle}>
            Cancel
          </Button>
          Are you sure?
        </Modal>
      </div>
    </Provider>
  );
}

export default AdminPage;
