import mailgunDefault from 'mailgun-js';

const mailgun = mailgunDefault({
  apiKey: '36253fa6d7e404426e6143fab58a77da-203ef6d0-32d562ff',
  domain: 'sandbox074c82faabd845298e075fbdf5cb2a43.mailgun.org'
});

export const EmailService = {
  async sendMail(from, to, subject, body) {
    const data = {
      from,
      to,
      subject,
      text: body
    };
    try{
      mailgun.messages().send(data)
    } catch(error){
       console.log(error)
    } 
  }
};

