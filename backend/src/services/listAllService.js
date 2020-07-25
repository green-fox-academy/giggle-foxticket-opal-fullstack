import { db } from '../data/connection';

export const ticketTypesService = {
  getAll: async () => {
    try {
      return await db.query('SELECT * from foxticket.TicketTypes');
    } catch {
      return false;
    }
  },
};
