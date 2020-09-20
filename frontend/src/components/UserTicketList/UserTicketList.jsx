import React, {useEffect } from 'react';
import Ticket from '../Ticket/Ticket';
import Button from '../Button/Button';
import { connect } from 'react-redux'
import { getTickets } from '../../flux/actions/ticketActions';
import PropTypes from 'prop-types';


const UserTicketList = (props) => {

  const {tickets , downloadTickets} = props

  useEffect(() => {
    downloadTickets()
  },[downloadTickets])

  return (
    <>
      {tickets[0] && 
        <div className="ticket-list-container">
        <div className="ticket-list">
        <h1 className="main-title">My tickets</h1>
        {tickets.map(({id, ticket_status, expiration_date}) => (
          <Ticket
            key={id}
            id = {id}
            title={ticket_status}
            description={expiration_date}
            iconName={'FaBeer'}
            userTicket={true} >
            <Button buttonStyle="btn--warning--solid">SHOW</Button>
          </Ticket> 
        ))}
        </div></div>
      }
      {!tickets[0] &&
        <div className="ticket-list-container">
        <div className="ticket-list">
        <h1 className="main-title">I don't have tickets2 yet : (</h1>
        <Button buttonStyle="btn--warning--solid">Buy Tickets</Button>
        </div></div>
      }
    </>
  );
};

const mapStateToProps = state => ({
  tickets: state.ticket.tickets,
  error: state.error,
});

const mapDispatchToProps = dispatch => {
  return {
    downloadTickets: () => dispatch(getTickets),
  }
};

UserTicketList.propTypes = {
  getTickets: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserTicketList);