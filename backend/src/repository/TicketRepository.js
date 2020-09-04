import { db } from '../data/connection';

export class TicketRepository {
  constructor() {}

  async get(id) {
    const data = await db.query(
      `SELECT *
         FROM foxticket.Ticket
         WHERE id = ?`,
      [id]
    );

    return await data.results[0];
  }

  async save(ticket) {
    const data = await db.query(
      `INSERT INTO foxticket.Ticket (order_id, user_id, ticket_status, expiration_date)
         VALUES (?, ?, ?, ?)`,
      [
        ticket.order_id,
        ticket.user_id,
        ticket.ticket_status,
        ticket.expiration_date,
      ]
    );

    return await data.results.insertId;
  }

  async update(ticket_status, ticketId) {
    await db.query(
      `UPDATE foxticket.Ticket
         SET ticket_status = ?
         WHERE id = ?`,
      [ticket_status, ticketId]
    );
  }
}
