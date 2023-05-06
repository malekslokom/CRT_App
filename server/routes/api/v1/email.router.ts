import { Router } from "express";
const nodemailer = require('nodemailer');
const path = require('path'); // Add this line to use path module
const ejs = require('ejs'); // Move this line above app.post()

const router = Router();
router.post('/send', async(req,res,next) => {
    console.log(req.body)
    const {message, objet} = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'ghada.malek12@gmail.com',
            pass: 'vaqfaelkvtkrkihk'
        }
    });
    const mailOptions = {
        from: 'ghada.malek12@gmail.com',
        to: 'romdhane.oussema1@gmail.com',
        subject: objet,
        html: await ejs.renderFile('./server/mails/CRT.ejs', {message:message}) // Pass the file path and data to render method
    };
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending email');
    }
});
export default router;
