import React from 'react'
import QRCode from "react-qr-code";
import PropTypes from 'prop-types';


export default function QR({id}) {
  
  const validateUrl = `${process.env.BACKEND_URL}/api/validate/tickets/${id}`
  
  return (
    <>
      <QRCode
        value={validateUrl}
        size={250}
        bgColor='#000'
        fgColor='#fff'
      />
      <h3>Ticket id: {id}</h3>
    </>
  )
}

QR.propTypes = {
  id: PropTypes.number.isRequired
};
