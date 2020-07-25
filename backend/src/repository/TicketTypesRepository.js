import { db } from '../data/connection';

export class TicketRepository {
  constructor() {}
  async saveTicket(ticket) {
    await db.query(
      `INSERT INTO foxticket.TicketTypes (name, price, description, icon)
         VALUES (?, ?, ?, ?)`,
      [ticket.name, ticket.price, ticket.description, ticket.icon]
    );
  }
}
