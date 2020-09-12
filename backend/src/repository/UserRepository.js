import { db } from '../data/connection';

export class UserRepository {
  constructor() {}

  async save(user) {
    await db.query(
      `INSERT INTO Users (name, email, password, isAdmin)
         VALUES (?, ?, ?, ?)`,
      [user.name, user.email, user.password, user.isAdmin]
    );
  }

  async getUserData(username, userEmail) {
    return await db.query(
      `SELECT name, email
         FROM Users
         WHERE name = ?
            OR email = ?`,
      [username, userEmail]
    );
  }

  async getUser(username) {
    return await db.query('SELECT * FROM Users WHERE name = ?', [username]);
  }
}
