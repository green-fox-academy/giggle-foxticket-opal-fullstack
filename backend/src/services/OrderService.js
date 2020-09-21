import Ticket from '../models/Ticket';
import Order from '../models/Order';

export class OrderService {
  constructor({ orderRepository, ticketRepository }) {
    this.orderRepository = orderRepository;
    this.ticketRepository = ticketRepository;
  }

  async create(ticket_type_id, user_id) {
    const orderToSave = new Order(ticket_type_id, user_id);
    const savedOrderId = await this.orderRepository.save(orderToSave);

    const ticketToSave = new Ticket(user_id, savedOrderId);
    const savedTicketId = await this.ticketRepository.save(ticketToSave);

    const savedOrder = await this.orderRepository.get(savedOrderId);
    const savedTicket = await this.ticketRepository.get(savedTicketId);

    return {
      savedOrder,
      savedTicket,
    };
  }

  async update(ticketId, orderStatus) {
    await this.ticketRepository.update('active', ticketId);
    const ticket = await this.ticketRepository.get(ticketId);

    await this.orderRepository.update(orderStatus, ticket.order_id);

    return `Updated Order with id ${ticket.order_id} to status ${orderStatus}.`;
  }
}
