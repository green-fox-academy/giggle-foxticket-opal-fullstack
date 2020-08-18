let API_KEY = '36253fa6d7e404426e6143fab58a77da-203ef6d0-32d562ff';
let DOMAIN = 'sandbox074c82faabd845298e075fbdf5cb2a43.mailgun.org';
let mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

export const EmailService = {
  async sendMail(to, subject, body) {
    const data = {
      from: 'Excited User <me@samples.mailgun.org>',
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

