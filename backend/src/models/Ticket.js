export default class Ticket {
  constructor(
    user_id,
    order_id,
    ticket_type_id,
    expiration_date,
    ticket_status = 'not active'
  ) {
    this.user_id = user_id;
    this.order_id = order_id;
    this.ticket_type_id = ticket_type_id;
    this.expiration_date = expiration_date;
    this.ticket_status = ticket_status;
  }
}
