import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'reactstrap';
import { CLEAR_ERRORS } from '../../flux/actions/types';

const ErrorDisplay = () => {
  const error = useSelector(state => state.error.id);
  const dispatch = useDispatch();

  if (!error) return null;
  return (
    <Alert color="danger" className="m-5">
      <button
        className="close"
        onClick={() => {
          dispatch({ type: CLEAR_ERRORS });
        }}
      >
        x
      </button>
      <p className="m-0">Something went wrong</p>
    </Alert>
  );
};

export default ErrorDisplay;
