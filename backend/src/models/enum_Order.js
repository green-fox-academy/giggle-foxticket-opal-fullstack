export const OrderStatus = {
  Pending: 'Pending',
  Done: 'Done',
  Rejected: 'Rejected',
};
Object.freeze(OrderStatus);

export class Order {
  constructor(id, ticket_type_id, user_id, status) {
    this.id = id;
    this.ticket_type_id = ticket_type_id;
    this.user_id = user_id;
    this.status = status;
    this.ordered_at = new Date();
  }
}
