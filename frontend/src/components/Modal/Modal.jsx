import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.styles.sass';

const Modal = ({ isShowing, hide, ...props }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">{props.children}</div>
          </div>
        </>,
        document.body
      )
    : null;

export default Modal;
