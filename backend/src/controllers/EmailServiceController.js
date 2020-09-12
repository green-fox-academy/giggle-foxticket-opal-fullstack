export class EmailServiceController {
  constructor({ emailService }) {
    this.emailService = emailService;
  }

  async send(req, res) {
    await this.emailService.sendMail(
      'Someone <me@samples.mailgun.org>',
      'someone@example.com',
      'subject',
      'text'
    );
    res.status(200);
  }
}
