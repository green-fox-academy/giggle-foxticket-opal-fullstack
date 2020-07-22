import {db} from '../data/connection'

export const listTickesService = async () => {
  try {
    return await db.query('SELECT * from Ticket-Types');
  } catch {
    return false;
  }
};
