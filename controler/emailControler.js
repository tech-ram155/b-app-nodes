const nodemailer = require("nodemailer");

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Your Gmail email address
    pass: 'your-password' // Your Gmail password or App Password
  }
});

exports.sendEmail = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  try {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"Your Name 👻" <your-email@gmail.com>', // sender address
      to: "recipient@example.com", // list of receivers
      subject: "Subject of your email", // Subject line
      text: `Message from ${firstName} ${lastName} <${email}>: ${message}`, // plain text body
      html: `<p><b>Message from ${firstName} ${lastName}:</b></p><p>${message}</p>` // html body
    });

    console.log("Message sent: %s", info.messageId);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
};
