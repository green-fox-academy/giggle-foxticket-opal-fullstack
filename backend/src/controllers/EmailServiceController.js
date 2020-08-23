import { EmailService } from '../services/EmailService';

export const EmailServiceController = {
  async send(req, res) {
    await EmailService.sendMail('Someone <me@samples.mailgun.org>','someone@example.com', 'subject', 'text');
    res.status(200)
  },
};
