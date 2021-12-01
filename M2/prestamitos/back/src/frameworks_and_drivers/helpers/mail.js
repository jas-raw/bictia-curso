const nodemailer = require("nodemailer");
const {emailPass, pass} = require('./config')

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: emailPass,
      pass: pass,
    },
});

async function send_email(email, message){
    console.log(emailPass, pass, process.env)
    let info = await transporter.sendMail({
        from: `"Equipo prestamitos" <${emailPass}>`,
        to: email,
        subject: "Resultado de su solicitud",
        text: `Su resultado fue: ${message}`
    });
    console.log(info)
}

module.exports = send_email