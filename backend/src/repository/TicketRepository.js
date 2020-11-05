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

  /*
SELECT user_id, status, name, price, ordered_at FROM foxticket.order 
JOIN foxticket.tickettypes
ON foxticket.order.ticket_type_id = foxticket.tickettypes.id
WHERE user_id = 2;
*/

  async getByOrderId(order_id) {
    const data = await db.query(`SELECT * FROM Ticket WHERE order_id = ?`, [
      order_id,
    ]);

    return await data.results[0];
  }

  async getTicketsForUser(user_id) {
    const data = await db.query(
      `SELECT ticket.id, order_id, user_id, ticket_status, name, price, description, icon FROM ticket 
      JOIN tickettypes
      ON ticket.ticket_type_id = tickettypes.id
         WHERE user_id = ?`,
      [user_id]
    );

    return await data.results;
  }

  async save(ticket) {
    const data = await db.query(
      `INSERT INTO Ticket (order_id, user_id, ticket_type_id, ticket_status, expiration_date)
         VALUES (?, ?, ?, ?, ?)`,
      [
        ticket.order_id,
        ticket.user_id,
        ticket.ticket_type_id,
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
