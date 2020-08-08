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
  async saveAdmin(user) {
    await db.query(
      `INSERT INTO foxticket.Users (name, email, password, isAdmin )
         VALUES (?, ?, ?, ?)`,
      [user.name, user.email, user.password, user.isAdmin]
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

  async getUser(username, password) {
    console.log(username)
    console.log(password)
    return await db.query(
      "SELECT * FROM foxticket.Users WHERE name = ? AND password = ?",
      [username, password]
    );
  }
}
