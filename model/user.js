const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Email is invalid');
        }
      },
    },

    password: {
      type: String,
      required: true,
      minlength: [6, 'Minimum password length is 6 characters'],
      trim: true,
    },
    date_of_birth: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.methods.generateAuthToken = async function () {
//   const user = this;
//   // generate a token
//   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secretcode', { expiresIn: '10d' });
//   return token;
// };
// fires a function before doc saved to the DB
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
// console.log("new user was created and saved", doc);
// static method to login user

userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error('Unable to login');
  }
  throw Error('Unable to login');
};

const User = mongoose.model('User', userSchema);

module.exports = User;
