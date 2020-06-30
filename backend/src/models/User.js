import dotenv from 'dotenv';

dotenv.config();

export default class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
