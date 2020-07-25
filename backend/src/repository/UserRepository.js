import { db } from '../data/connection';

export class UserRepository {
  constructor() {}
  async save(user) {
    await db.query(
      `INSERT INTO foxticket.Users (name, email, password)
         VALUES (?, ?, ?)`,
      [user.name, user.email, user.password]
    );
  }
  async saveTicket(ticket) {
    await db.query(
      `INSERT INTO foxticket.TicketTypes (name, price, description, icon)
         VALUES (?, ?, ?, ?)`,
      [ticket.name, ticket.price, ticket.description, ticket.icon]
    );
  }
  
  async getUserData(username, userEmail) {
    return await db.query(
      `SELECT name, email
         FROM foxticket.Users
         WHERE name = ?
            OR email = ?`,
      [username, userEmail]
    );
  }

  async get(username, userPassword) {
    return await db.query(
      `SELECT name, id
         FROM foxticket.Users
         WHERE name = ?
            AND password = ?`,
      [username, userPassword]
    );
  }
}
