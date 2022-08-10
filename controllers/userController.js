const User = require('../model/user.js');
const nodemailer = require('nodeMailer');
require('dotenv').config();

// signin API
exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

// signup API
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  try {
    // save the user in the database
    await user.save();
    // generate token which will be used to check authenticated users
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

// routes API
exports.library = (req, res) => {
  res.render('library.ejs')
};

exports.index = (req, res) => {
  res.status(200).render('index.ejs')
};

exports.about = (req, res) => {
  res.status(200).render('about.ejs')
},
exports.contact = (req, res) => {
  res.status(200).render('contact.ejs')
}

exports.signUp = (req, res) => {
  res.status(200).render('signup.ejs')
};

exports.signIn = (req, res) => {
  res.status(200).render('signin.ejs')
};

// Sending Email API
exports.sendEmail = (req, res) => {(
  fname = req.body.fname,
  lname = req.body.lname,
  tel = req.body.tel,
  from = req.body.from,
  subject = req.body.subject,
  message = req.body.body);

  // create reusable transporter object using the default SMTP transport
  const Transporter = nodemailer.createTransport({
      host: process.env.host,
      port: 2525,
      auth: {
      user: process.env.user,
      pass: process.env.pass
      }
  });

  // send mail with defined transport object
  let mailOptions = {
      from: `${from}`,  // list of sender
      to:"cc_team127@gmail.com",  // list of receivers
      subject: `${subject}`, // Subject line
      text: `${message}` // plain text body
      // html: "<b>Hello world?</b>", // html body
  };


  // Transporter.sendMail object
  Transporter.sendMail(mailOptions, (err) => {
      if (err) {
      console.log("Error " + err);
      res.status(500).send("Something went wrong.")
      } else {
        res.status(200).send("<h1>Email successfully!</h1>");
        console.log("Email sent successfully");
      };
      
  })
};
