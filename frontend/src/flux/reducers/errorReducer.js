import { CLEAR_ERRORS, GET_ERRORS } from '../actions/types';

const initialState = {
  data: {},
  status: null,
  id: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        data: action.payload.message,
        status: action.payload.status,
        id: action.payload.id,
      };

    case CLEAR_ERRORS:
      return {
        data: {},
        status: null,
        id: null,
      };

    default:
      return state;
  }
}
