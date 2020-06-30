import bcrypt from 'bcrypt';
import { db } from '../data/connection';

export const registerService = {
  async registerUser(user) {
    const hashedPassword = await bcrypt.hash('123123123', 10);

    await db.query(
      `INSERT INTO foxticket.Users (username, email, password) VALUES (?, ?, ?)`,
      [user.username, user.email, hashedPassword]
    );
  },
};
