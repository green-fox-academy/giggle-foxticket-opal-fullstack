import {
  ADD_TICKET,
  DELETE_TICKET,
  DOWNLOADING_TICKETS,
  GET_TICKETS,
  UPDATE_TICKET,
} from '../actions/types';

const initialState = {
  tickets: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case DOWNLOADING_TICKETS:
      return {
        ...state,
      };

    case GET_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };

    case ADD_TICKET:
      return {
        ...state,
        tickets: [action.payload, ...state.tickets],
      };

    case UPDATE_TICKET:
      return {
        ...state,
        tickets: [action.payload, ...state.tickets],
      };

    case DELETE_TICKET:
      return {
        ...state,
        tickets: state.tickets.filter(ticket => ticket.id !== action.payload),
      };

    default:
      return state;
  }
}
