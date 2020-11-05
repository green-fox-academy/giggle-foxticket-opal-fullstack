import { db } from '../data/connection';

export class TicketRepository {
  constructor() {}

  async get(id) {
    const data = await db.query(
      `SELECT *
         FROM Ticket
         WHERE id = ?`,
      [id]
    );

    return await data.results[0];
  }

  async getByOrderId(order_id) {
    const data = await db.query(`SELECT * FROM Ticket WHERE order_id = ?`, [
      order_id,
    ]);

    return await data.results[0];
  }

  async getTicketsForUser(user_id) {
    const data = await db.query(
      `SELECT *
         FROM Ticket
         WHERE user_id = ?`,
      [user_id]
    );

    return await data.results;
  }

  async save(ticket) {
    const data = await db.query(
      `INSERT INTO Ticket (order_id, user_id, ticket_status, expiration_date)
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
    return await db.query(
      'UPDATE `Ticket` SET ticket_status = ? WHERE id = ?',
      [ticket_status, ticketId]
    );
  }
}
