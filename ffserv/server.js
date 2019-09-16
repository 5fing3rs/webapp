const http = require('http');
const nodemailer = require("nodemailer");

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

/* code to send mail */
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"5fing3rs Helpdesk?" <no-reply@5fing3rs.com>', // sender address
    to: '', // list of receivers
    subject: 'Thanks for Contacting Us', // Subject line
    text: 'Thanks for contacting us, our representatives will connect with you shortly', // plaintext body
    html: '<b>Thanks ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});

