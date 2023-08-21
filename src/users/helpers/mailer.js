require("dotenv").config();
const nodemailer = require("nodemailer");

async function sendEmail(email, code) {
   // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  try {

    let testAccount = await nodemailer.createTestAccount();

   // create a transporter object
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'aroussi.services@gmail.com',
      pass: 'cexhaugvomrrpmoh'
  }
});


   var subject = "Verify your email";

    // The body of the email for recipients
    var body_html = `<!DOCTYPE> 
    <html>
      <body>
        <p>Your authentication code is : </p> <b>${code}</b>
      </body>
    </html>`;

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'aroussi.stage@gmail.com', // sender address
      to: email, // list of receivers
      subject: subject, // Subject line
      //text: "Hello world?", // plain text body
      html: body_html, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    
  /*   const msg = {
      to: 'aroussi.stage@gmail.com', // Change to your recipient
      from: 'aroussi.services@gmail.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error("fatal",error)
      })
    const smtpEndpoint = "smtp.sendgrid.net";

    const port = 465;

    const senderAddress = "aroussi.services@gmail.com";

    var toAddress = email;

    const smtpUsername = "apikey";

    const smtpPassword = process.env.SG_APIKEY;

    var subject = "Verify your email";

    // The body of the email for recipients
    var body_html = `<!DOCTYPE> 
    <html>
      <body>
        <p>Your authentication code is : </p> <b>${code}</b>
      </body>
    </html>`;

    // Create the SMTP transport.
    let transporter = nodemailer.createTransport({
      host: smtpEndpoint,
      port: port,
      secure: true, // true for 465, false for other ports
      auth: {
        user: smtpUsername,
        pass: smtpPassword,
      },
    });

    // Specify the fields in the email.
    let mailOptions = {
      from: senderAddress,
      to: toAddress,
      subject: subject,
      html: body_html,
    };

    let info = await transporter.sendMail(mailOptions); */
    return { error: false };
  } catch (error) {
    console.error("send-email-error", error);
    return {
      error: true,
      message: "Cannot send email",
    };
  }
}

module.exports = { sendEmail };
