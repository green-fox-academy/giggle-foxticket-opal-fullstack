import { listTickesService } from '../services/listTickesService';

export const ticketTypesController = {
  async get(req, res) {
    let data = await listTickesService();
    !data ? res.status(500) : res.status(200).json([data]);
  },
};
