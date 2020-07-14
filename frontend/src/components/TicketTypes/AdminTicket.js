import React from 'react';
import './AdminTicket.style.sass';
import GiveIcon from '../DynamicIcon/DynamicIcon';
import Button from '../Button/Button';

function AdminTicket({ title, description , iconName }) {
  console.log(iconName)
  return (
    <div className="container">
      <div className="icon">
{/*        <GiveIcon icon='faAd' />
 */}      </div>
      <div className="content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="btns">
        <Button buttonStyle="btn--danger--solid">Edit</Button>
        <Button buttonStyle="btn--danger--solid--btn">Delete</Button>
      </div>
    </div>
  );
}
export default AdminTicket;
