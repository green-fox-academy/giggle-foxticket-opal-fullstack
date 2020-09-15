export class TicketTypesController {
  constructor({ ticketTypeService }) {
    this.ticketTypeService = ticketTypeService;
  }

  async get(req, res) {
    try {
      let data = await this.ticketTypeService.getAll();
      res.status(200).json([data.results]);
    } catch (error) {
      res.status(400).json(error.message);
    }
  }

  async post(req, res) {
    const data = req.body;
    if (
      !data.name ||
      !data.price ||
      typeof data.name !== 'string' ||
      typeof data.price !== 'number'
    ) {
      res.status(400).json({ message: 'Missing OR incorrect field' });
    } else {
      try {
        const response = await this.ticketTypeService.addNew(data);
        res.status(201).json(response);
      } catch (error) {
        res.status(400).json(error.message);
      }
    }
  }

  async put(req, res) {
    const data = req.body;
    const id = req.params.id;

    if (
      !data.name ||
      !data.price ||
      typeof data.name !== 'string' ||
      typeof data.price !== 'number' ||
      !id
    ) {
      res.status(400).json({ message: 'Missing or incorrect value(s)' });
    } else {
      try {
        const result = await this.ticketTypeService.updateTicket(id, data);
        !result.results.affectedRows
          ? null
          : res.status(200).json({ message: 'Update was successful' });
      } catch (error) {
        res.status(400).json(error.message);
      }
    }
  }
  async delete(req, res) {
    const id = req.params.id;
    try {
      const result = await this.ticketTypeService.removeTicket(id);
      result.results.affectedRows <= 0
        ? res.status(404).json({ message: 'No content' })
        : res.status(200).json({ message: 'Ticket successfully removed' });
    } catch (error) {
      res.status(400).json(error.message);
    }
  }
}
