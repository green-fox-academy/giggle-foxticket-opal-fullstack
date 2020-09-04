export default class Order {
  constructor(ticket_type_id, user_id) {
    this.ticket_type_id = ticket_type_id;
    this.user_id = user_id;
    this.status = 'not active';
  }
}
