import { db } from '../data/connection';

export const registerRepository = {
  async saveUser(user) {
    await db.query(
      `INSERT INTO foxticket.Users (name, email, password)
         VALUES (?, ?, ?)`,
      [user.name, user.email, user.password]
    );
  },

  async getUserData(username, userEmail) {
    return await db.query(
      `SELECT name, email
         FROM foxticket.Users
         WHERE name = ?
            OR email = ?`,
      [username, userEmail]
    );
  },
};
