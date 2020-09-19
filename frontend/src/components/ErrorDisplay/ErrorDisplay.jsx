import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'reactstrap';
import { CLEAR_ERRORS } from '../../flux/actions/types';

const ErrorDisplay = () => {
  const error = useSelector(state => state.error.message.message);
  const dispatch = useDispatch();

  return error ? (
    <Alert color="danger" className="m-5">
      <button
        className="close"
        onClick={() => {
          dispatch({ type: CLEAR_ERRORS });
        }}
      >
        x
      </button>
      <p className="m-0">{error}</p>
    </Alert>
  ) : null;
};

export default ErrorDisplay;
