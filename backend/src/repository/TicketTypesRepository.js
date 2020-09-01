import { db } from '../data/connection';
require('dotenv').config();

export class TicketTypeRepository {
  constructor() {
    this.db = process.env.MYSQL_DATABASE;
  }
  async saveTicketType(ticket) {
    await db.query(
      `INSERT INTO ${this.db}.TicketTypes (name, price, description, icon)
         VALUES (?, ?, ?, ?)`,
      [ticket.name, ticket.price, ticket.description, ticket.icon]
    );
  }

  async listAllTicketType() {
    return await db.query(`SELECT * from ${this.db}.TicketTypes`);
  }
  async updateTicketType(id, data) {
    return await db.query(
      `UPDATE ${this.db}.TicketTypes SET name= ?,
      price=? WHERE id=?`,
      [data.name, data.price, id]
    );
  }
  async deleteTicketType(id) {
    return await db.query(`DELETE FROM ${this.db}.TicketTypes WHERE id = ?`, [id]);
  }
}
