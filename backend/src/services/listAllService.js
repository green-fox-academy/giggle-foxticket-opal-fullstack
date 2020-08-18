import { TicketRepository } from '../repository/TicketTypesRepository';
const Ticket = new TicketRepository();

export const ticketTypesService = {
  getAll: () => {
    return Ticket.listAll();
  },

  addNew: (newTicket) => {
    return Ticket.saveTicket(newTicket);
  },
  updateTicket: (id , data) => {
    return Ticket.update(id , data);
  },
  removeTicket: (id) => {
    return Ticket.delete(id);
  },
};
