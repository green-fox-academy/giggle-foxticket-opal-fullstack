
export class TicketService {
  constructor({ ticketRepository }) {
    this.ticketRepository = ticketRepository;
  }
  getTickets(userID) {
    return this.ticketRepository.get(userID);
  }
}

