import { ticketTypesService } from '../services/listAllService';

export const ticketTypesController = {
  async get(req, res) {
    let data = await ticketTypesService.getAll();
    res.status(200).json([data.results]);
  },

  async post(req, res) {
    const data = req.body;
    console.log(data);
    if (!data.name ||!data.price ||typeof data.name !== 'string' ||typeof data.price !== 'number') {
      res.status(400).json({ message: 'Missing OR incorrect field' });
    } else {
      const response = await ticketTypesService.addNew(data);
      res.status(201).json(response);
    }
  },
};
