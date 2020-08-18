import { EmailService } from '../services/EmailService';

export const EmailServiceController = {
  async send(req, res) {
    await EmailService.sendMail('someone@example.com', 'subject', 'text');
    res.status(200)
  },
};