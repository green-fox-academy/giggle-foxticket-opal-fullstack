import { db } from '../data/connection';

export class SubscriberRepository {
  constructor() {}

  async subscribe(subscriber) {
    await db.query(
      `INSERT INTO foxticket.Subscribers (name, email)
         VALUES (?, ?)`,
      [subscriber.name, subscriber.email]
    );
  }
}
