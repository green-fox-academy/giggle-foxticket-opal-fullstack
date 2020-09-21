import mailgunDefault from 'mailgun-js';

export class EmailService {
  constructor() {}
  async sendMail(from, to, subject, body) {
    const mailgun = mailgunDefault({
      apiKey: process.env.API_KEY,
      domain: 'sandbox074c82faabd845298e075fbdf5cb2a43.mailgun.org',
    });

    const data = {
      from,
      to,
      subject,
      text: body,
    };

    try {
      mailgun.messages().send(data);
    } catch (error) {
      console.log(error);
    }
  }
}
