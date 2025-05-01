// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// // const PORT = 5;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Nodemailer Transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'kenanguitar666@gmail.com', // Gmail hesabınız
//     pass: 'youknowthecode', // Gmail hesabınızın şifrəsi (və ya App Password)
//   },
// });


// // API Endpoint for Sending Emails
// app.post('/api/subscribe', (req, res) => {
//   const { email, category } = req.body;

//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: 'kenanguitar666@gmail.com', // Mesajın göndəriləcəyi e-poçt
//     subject: 'New Subscription',
//     text: `You have a new subscription from ${email} for the category: ${category}.`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       return res.status(500).json({ message: 'Failed to send email' });
//     }
//     res.status(200).json({ message: 'Email sent successfully!' });
//   });
// });

// // Start Server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });