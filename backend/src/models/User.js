import dotenv from 'dotenv';

dotenv.config();

export default class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
