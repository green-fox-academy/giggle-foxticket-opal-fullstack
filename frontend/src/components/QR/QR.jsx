import React from 'react'
import QRCode from "react-qr-code";
import PropTypes from 'prop-types';
import './QR.styles.sass'


export default function QR({id}) {
  
  const validateUrl = `http://localhost:3000/api/tickets/${id}`
  
  return (
      <QRCode
        value={validateUrl}
        size={250}
        bgColor='#000'
        fgColor='#fff'
      />
  )
}

QR.propTypes = {
  id: PropTypes.number.isRequired
};
