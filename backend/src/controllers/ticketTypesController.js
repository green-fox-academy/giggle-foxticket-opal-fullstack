import { ticketTypesService } from '../services/listAllService';

export const ticketTypesController = {
  async get(req, res) {
    let data = await ticketTypesService.getAll();
    !data ? res.status(500) : res.status(200).json([data]);
  },
};
