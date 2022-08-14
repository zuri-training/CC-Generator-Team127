const User = require('../model/user.js');
const nodemailer = require('nodeMailer');
const jwt = require('jsonwebtoken');


// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { firstName: '', lastName: '', email: '', password: '', date_of_birth: '' };

  // incorrect email
  if (err.message === 'Unable to login') {
    errors.email = 'Invalid email or password';
  }

  // incorrect email
  if (err.message === 'Unable to login') {
    errors.password = 'Invalid email or password';
  }
  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('User validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// creates json web token

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

// signIn API

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id, token });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
  // res.send("user login");
};
// exports.signin = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findByCredentials(email, password);
//     const token = await user.generateAuthToken();
//     res.send({ user, token });
//   } catch (error) {
//     const errors = handleErrors(error);
//     res.status(400).json({ errors });
//     // res.status(400).send(error);
//   }
// };

// signup API

exports.signup = async (req, res) => {
  const { firstName, lastName, email, password, date_of_birth } = req.body;
  try {
    const user = await User.create({ firstName, lastName, email, password, date_of_birth });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
    // res.status(400).json(err);
  }
};

module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
  // res.send("hello");
};

// exports.signup = async (req, res) => {
//   const { firstName, lastName, email, password, date_of_birth } = req.body;
//   const user = new User({ firstName, lastName, email, password, date_of_birth });
//   try {
//     // save the user in the database
//     await user.save();
//     // generate token which will be used to check authenticated users
//     const token = await user.generateAuthToken();
//     res.status(201).send({ user, token });
//   } catch (error) {
//     const errors = handleErrors(error);
//     res.status(400).json({ errors });
//     // res.status(400).send(error);
//   }
// };

// routes API
exports.library = (req, res) => {
  res.render('library.ejs');
};

exports.index = (req, res) => {
  res.status(200).render('index.ejs');
};

(exports.about = (req, res) => {
  res.status(200).render('about.ejs');
}),
  (exports.contact = (req, res) => {
    res.status(200).render('contact.ejs');
  });

exports.signUp = (req, res) => {
  res.status(200).render('signup.ejs');
};

exports.signIn = (req, res) => {
  res.status(200).render('signin.ejs');
};

exports.downloadpage1 = (req, res) => {
  // console.log(req.headers);
  res.status(200).render('downloadpage1');
};

exports.downloadpage2 = (req, res) => {
  res.status(200).render('downloadpage2');
};
exports.downloadpage3 = (req, res) => {
  res.status(200).render('downloadpage3');
};
exports.downloadpage4 = (req, res) => {
  res.status(200).render('downloadpage4');
};

exports.downloadpage5 = (req, res) => {
  res.status(200).render('downloadpage5');
};

exports.downloadpage6 = (req, res) => {
  res.status(200).render('downloadpage6');
};
exports.downloadpage7 = (req, res) => {
  res.status(200).render('downloadpage7');
};

exports.downloadpage8 = (req, res) => {
  res.status(200).render('downloadpage8');
};

exports.howTo = (req, res) => {
  res.status(200).render('use');
};

exports.developer = (req, res) => {
  res.status(200).render('develop-center');
};

// Sending Email API
exports.sendEmail = (req, res) => {
  // (fname = req.body.fname),
  // (lname = req.body.lname),
  // (tel = req.body.tel),
  (from = req.body.from), (subject = req.body.subject), (message = req.body.body);

  // create reusable transporter object using the default SMTP transport
  const Transporter = nodemailer.createTransport({
    host: process.env.host,
    port: process.env.sendPort,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  // send mail with defined transport object
  let mailOptions = {
    from: `${from}`, // list of sender
    to: process.env.to, // list of receivers
    subject: `${subject}`, // Subject line
    text: `${message}`, // plain text body
    // html: "<b>Hello world?</b>", // html body
  };

  // Transporter.sendMail object
  Transporter.sendMail(mailOptions, (err) => {
    if (err) {
      console.log('Error ' + err);
      res.status(500).send('Something went wrong.');
    } else {
      res.status(200).send(`
      <h1>Email successfully!</h1>
      <a href ="/">
      <button id="login-button"> Home </button>
      </a>
      `),
        console.log('Email sent successfully');
    }
  });
};
