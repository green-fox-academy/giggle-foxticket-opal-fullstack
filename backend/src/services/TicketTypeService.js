export class TicketTypeService {
  constructor({ ticketTypeRepository }) {
    this.ticketTypeRepository = ticketTypeRepository;
  }
  getAll() {
    return this.ticketTypeRepository.listAllTicketType();
  }

  addNew(newTicket) {
    return this.ticketTypeRepository.saveTicketType(newTicket);
  }

  updateTicket(id, data) {
    return this.ticketTypeRepository.updateTicketType(id, data);
  }

  removeTicket(id) {
    return this.ticketTypeRepository.deleteTicketType(id);
  }
}
