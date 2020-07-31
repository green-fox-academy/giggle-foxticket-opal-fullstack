import { listAll } from '../repository/TicketTypesRepository';

export const ticketTypesService = {
  getAll: () => {
    try {
     return listAll();
    } catch {
      return false;
    }
  },
};
