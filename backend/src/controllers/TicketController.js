export class TicketController {
  constructor({ ticketService }) {
    this.ticketService = ticketService;
  }
  
  async getIndex(req, res) {
    
    const { user_id } = req.user
  
    if(!user_id) {
      res
        .status(400)
        .json({ message: 'Missing or incorrect user_id' });
    } 
    else {  
      try {
        let data = await this.ticketService.getTickets(user_id);
        res
          .status(200)
          .json(data);
      } catch (error) {
        res
          .status(400)
          .json(error.message);
      }
    }
  }
}
