import { db } from '../data/connection';

export class OrderRepository {
  constructor() {}

  async get(id) {
    const data = await db.query('SELECT * FROM `Order` WHERE id = ?', [id]);

    return await data.results[0];
  }

  async save(order) {
    const data = await db.query(
      'INSERT INTO `Order` (ticket_type_id, user_id) VALUES (?, ?)',
      [order.ticket_type_id, order.user_id]
    );

    return await data.results.insertId;
  }

  async update(orderStatus, orderId) {
    return await db.query('UPDATE `Order` SET status = ? WHERE id = ?', [
      orderStatus,
      orderId,
    ]);
  }
}
