import mailgunDefault from 'mailgun-js';

const mailgun = mailgunDefault({
  apiKey: process.env.API_KEY,
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
