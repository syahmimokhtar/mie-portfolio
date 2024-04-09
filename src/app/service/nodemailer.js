var nodemailer = require("nodemailer");

export async function sendMail(serviceEmail, fromEmail, name, toEmail,  subject, otpText) {

  try {

    let transporter;

    switch (serviceEmail.trim()) {
      case "gmail":
        toEmail = process.env.EMAIL;
        transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
          },
        });
        break;

      case "outlook":
        toEmail = process.env.EMAIL_OUTLOOK;
        transporter = nodemailer.createTransport({
          host: 'smtp-mail.outlook.com',
          port: 587,
          secure: false,
          auth: {
            user: process.env.EMAIL_OUTLOOK,
            pass: process.env.EMAIL_PASS_OUTLOOK
          }
        });
        break;

      case "yahoo":
        toEmail = process.env.EMAIL_YAHOO;
        transporter = nodemailer.createTransport({
          host: 'smtp.mail.yahoo.com',
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_YAHOO,
            pass: process.env.EMAIL_PASS_YAHOO
          },

          tls: {
            minVersion: 'TLSv1.2'
          }
        

        });
        break;

      default:
        throw new Error("Invalid serviceEmail: " + serviceEmail);
    }

    var mailOptions = {
      from: `${name} <${fromEmail}>`, // sender address
      to: `${toEmail}`, // list of receivers
      subject: subject,
      text: otpText,
    };

    // Send mail using async/await with Promises
    const info = await transporter.sendMail(mailOptions);
    console.log("Email Sent:", info.response);
    return true;

    
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
}