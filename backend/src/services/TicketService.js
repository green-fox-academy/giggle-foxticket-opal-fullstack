
export class TicketService {
  constructor({ ticketRepository }) {
    this.ticketRepository = ticketRepository;
  }
  getTickets(user_id) {
    return this.ticketRepository.getTicketsForUser(user_id);
  }
}

