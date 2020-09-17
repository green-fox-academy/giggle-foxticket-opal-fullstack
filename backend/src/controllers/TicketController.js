export class TicketController {
  constructor({ ticketService }) {
    this.ticketService = ticketService;
  }

  async get(req, res) {

    const userID = req.params.id

    if(!userID){
      res.status(400).json({ message: 'Missing or incorrect userID' });
    }else{ 
      try {
        let data = await this.ticketService.getTickets(userID);
        res.status(200).json([data.results]);
      } catch (error) {
        res.status(400).json(error.message);
      }
    }
  }
}
