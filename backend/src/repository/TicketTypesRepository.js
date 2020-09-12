import { db } from '../data/connection';

export class TicketTypeRepository {
  constructor() {}
  async saveTicketType(ticket) {
    await db.query(
      `INSERT INTO TicketTypes (name, price, description, icon)
         VALUES (?, ?, ?, ?)`,
      [ticket.name, ticket.price, ticket.description, ticket.icon]
    );
  }

  async listAllTicketType() {
    return await db.query(`SELECT * from TicketTypes`);
  }

  async updateTicketType(id, data) {
    return await db.query(
      `UPDATE TicketTypes SET name= ?,
      price=? WHERE id=?`,
      [data.name, data.price, id]
    );
  }

  async deleteTicketType(id) {
    return await db.query(`DELETE FROM TicketTypes WHERE id = ?`, [id]);
  }
}
