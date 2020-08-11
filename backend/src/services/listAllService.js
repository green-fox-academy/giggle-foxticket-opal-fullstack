import { TicketRepository } from '../repository/TicketTypesRepository';
const Ticket = new TicketRepository();

export const ticketTypesService = {
  getAll: () => {
    return Ticket.listAll();
  },

  addNew: (newTicket) => {
    return Ticket.saveTicket(newTicket);
  },
};
