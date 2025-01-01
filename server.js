// server.js (Node.js/Express example)
const express = require('express');
const emailjs = require('emailjs-com');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/send-email', (req, res) => {
    const { from_name, from_email, message } = req.body;

    emailjs.send(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        { from_name, from_email, message },
        process.env.EMAILJS_PUBLIC_KEY
    ).then(response => {
        res.status(200).send('Message sent successfully!');
    }).catch(error => {
        res.status(500).send('Failed to send message.');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});