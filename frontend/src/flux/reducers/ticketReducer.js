import { ADD_TICKET, DELETE_TICKET, GET_TICKETS } from '../actions/types';

const initialState = {
  tickets: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
      };

    case ADD_TICKET:
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
