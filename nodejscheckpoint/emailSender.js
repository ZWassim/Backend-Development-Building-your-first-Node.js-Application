// emailSender.js

const nodemailer = require('nodemailer');

// Create a transporter using Gmail SMTP
// IMPORTANT: For Gmail, you need to use an App Password, not your regular password
// How to get an App Password: 
// 1. Enable 2-Factor Authentication on your Google account
// 2. Go to https://myaccount.google.com/apppasswords
// 3. Generate an app password for "Mail" and "Node.js"
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',     // Replace with your email
        pass: 'your-app-password'          // Replace with your Gmail App Password
    }
});

// Define email options
const mailOptions = {
    from: 'your-email@gmail.com',          // Sender address
    to: 'recipient@example.com',           // Recipient address
    subject: 'Student Report Notification', // Subject line
    text: 'Hello! This is a test email sent from Node.js using Nodemailer.\n\nYour student report has been generated successfully.' // Plain text body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('❌ Error sending email:', error);
    } else {
        console.log('✅ Email sent successfully!');
        console.log('📧 Message ID:', info.messageId);
        console.log('📨 Response:', info.response);
    }
});