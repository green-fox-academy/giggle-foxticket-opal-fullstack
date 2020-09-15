import assert from 'assert';

import { OrderService } from './OrderService';

describe('OrderService', () => {
  const order = {
    ticket_type_id: 1,
    user_id: 1,
  };

  const ticket = {
    order_id: 1,
    user_id: 1,
    ticket_status: 'not active',
    expiration_date: '2020-01-01',
  };

  it('should create a ticket and an order if ticket_type_id and user_id are provided', async () => {
    const orderRepository = {
      save: async () => {
        return order;
      },

      get: async () => {
        return order;
      },
    };

    const ticketRepository = {
      save: async () => {
        return ticket;
      },

      get: async () => {
        return ticket;
      },
    };

    const orderService = new OrderService({
      orderRepository,
      ticketRepository,
    });

    assert.deepStrictEqual(await orderService.create(), {
      savedOrder: { ticket_type_id: 1, user_id: 1 },
      savedTicket: {
        expiration_date: '2020-01-01',
        order_id: 1,
        ticket_status: 'not active',
        user_id: 1,
      },
    });
  });

  it('should set the ticket to active ', async () => {
    const ticketRepository = {
      get: async () => {
        return {
          order_id: 1,
        };
      },

      update: async () => {},
    };

    const orderRepository = {
      update: async () => {},
    };

    const orderService = new OrderService({
      ticketRepository,
      orderRepository,
    });

    assert.deepStrictEqual(
      await orderService.update('1', 'active'),
      'Updated Order with id 1 to status active.'
    );
  });
});
