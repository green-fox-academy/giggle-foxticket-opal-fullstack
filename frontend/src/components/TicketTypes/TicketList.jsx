import React from 'react';
import './TicketList.styles.sass';
import Button from '../Button/Button';
import ticket from '../../assets/images/icons/ticket-icon.png';

const TicketList = () => {
  return (
    <div className="ticket-list">
      <div className="ticket-list-container">
        <h1 className="ticket-types-header">Ticket Types</h1>
        <div className="ticket">
          <img src={ticket} alt="cat" className="ticket-image" />
          <div className="ticket-description">
            <h3 className="ticket-header">Three-line item</h3>
            The above example no longer works, I think due to changes in newer
            versions of Sass. It cannot handle the multi-line expression (issue
            here). Each grid row must be defined all in the same line: The above
          </div>
          <Button buttonStyle="btn--danger--solid">BUY</Button>
        </div>

        <div className="ticket">
          <img src={ticket} alt="cat" className="ticket-image" />
          <div className="ticket-description">
            <h3 className="ticket-header">Three-line item</h3>
            So CSS grid-template-areas ASCII art works fine with .scss syntax,
            just not .sass after toying with it. Of course .scss is identical to
            CSS. Was hoping .sass would work to keep it cleaner.So CSS
          </div>
          <Button buttonStyle="btn--danger--solid">BUY</Button>
        </div>

        <div className="ticket">
          <img src={ticket} alt="cat" className="ticket-image" />
          <div className="ticket-description">
            <h3 className="ticket-header">Three-line item</h3>
            If anyone knows any discussion going on about .sass working here (or
            secret hacks to make .sass work with the ASCII portion of
            grid-template-areas), would love to check out... Thanks in a
          </div>
          <Button buttonStyle="btn--danger--solid">BUY</Button>
        </div>
      </div>
    </div>
  );
};

export default TicketList;
