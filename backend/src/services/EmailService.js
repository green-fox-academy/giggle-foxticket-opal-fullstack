const sgMail = require('@sendgrid/mail');

export const EmailService = {
  async sendMail() {
    sgMail.setApiKey(sgMail.setApiKey(process.env.SENDGRID_API_KEY));
    const msg = {
      to: 'test@example.com',
      from: 'test@example.com',
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    try{
      sgMail.send(msg);
    } catch(error){
       console.log(error)
    }
  },
};

