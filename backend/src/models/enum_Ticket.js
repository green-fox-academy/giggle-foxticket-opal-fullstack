export const TicketStatus = {
  Active: 'Active',
  Not_Active: 'Not_Active',
  Revoked: 'Revoked',
  Expired: 'Expired',
};

Object.freeze(TicketStatus);

export class Ticket {
  constructor(id, ticket_type_id, user_id, status) {
    this.id = id;
    this.ticket_type_id = ticket_type_id;
    this.user_id = user_id;
    this.status = status;
    this.ordered_at = new Date();
  }
}
