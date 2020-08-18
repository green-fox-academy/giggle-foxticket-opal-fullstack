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

  async listAll() {
    return await db.query('SELECT * from foxticket.TicketTypes');
  }
  async update(id, data) {
    return await db.query(
      `UPDATE foxticket.TicketTypes SET name= ?,
      price=? WHERE id=?`,
      [data.name, data.price, id]
    );
  }
  async delete(id) {
    return await db.query(`DELETE FROM foxticket.TicketTypes WHERE id = ?`, [id]);
  }
}
