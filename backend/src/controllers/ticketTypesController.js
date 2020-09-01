import { TicketTypesService } from '../services/ticketTypeService';

export class TicketTypesController {
  constructor(){
    this.ticketTypesService = new TicketTypesService()
  }

  async get(req, res) {
    let data = await this.ticketTypesService.getAll();
    res.status(200).json([data.results]);
  }

  async post(req, res) {
    const data = req.body;
    console.log(data);
    if ( !data.name || !data.price || typeof data.name !== 'string' || typeof data.price !== 'number') {
      res.status(400).json({ message: 'Missing OR incorrect field' });
    } else {
      const response = await this.ticketTypesService.addNew(data);
      res.status(201).json(response);
    }
  }
  async put(req, res) {
    const data = req.body;
    const id = req.params.id;

    if (!data.name || !data.price || typeof data.name !== 'string' || typeof data.price !== 'number' || !id ) {
      res.status(400).json({ message: 'Missing or incorrect value(s)' });
    } else {
      const result = await this.ticketTypesService.updateTicket(id, data);
      !result.results.affectedRows ? null : 
      res.status(200).json({message: "Update was successful"});
    }
  }
  async delete(req, res) {
    const id = req.params.id;
    const result = await this.ticketTypesService.removeTicket(id);
    console.log(result.results.affectedRows)
    result.results.affectedRows <= 0 ?
    res.status(404).json({message:"No content"}) :
    res.status(200).json({message: "Ticket successfully removed" })
  }
};
