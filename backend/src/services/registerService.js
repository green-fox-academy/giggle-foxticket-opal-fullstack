import bcrypt from 'bcrypt';
import { db } from '../data/connection';

export const registerService = {
  async registerUser(user) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const temp = await db.query(
      `SELECT username FROM foxticket.Users WHERE username = ?`,
      [user.username]
    );

    //select from users where username == user.username if true then throw new Error else await db.query

    if (temp) {
      console.log(temp);
      throw new Error('hello');
    } else {
      await db.query(
        `INSERT INTO foxticket.Users (username, email, password)
             VALUES (?, ?, ?)`,
        [user.username, user.email, hashedPassword]
      );
    }

    return user;
  },
};
