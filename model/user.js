const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    name: {
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
  },
  {
    timestamps: true,
  }
);

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  // generate a token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secretcode', { expiresIn: '10d' });
  return token;
};

userSchema.statics.findByCredentials = async (email, password) => {
  // checks if the email exists in the database
  const user = await User.findOne({ email });

  // if the email doesn't exist
  if (!user) {
    throw new Error('Unable to login');
  }

  const isMatch = await bcrypt.compare(password, user.password);

  // if the email do exist but doesn't match
  if (!isMatch) {
    throw new Error('Incorrect username or password');
  }
  return user;
};

// hash the plain text password before saving to the database
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model('user', userSchema);



module.exports = User;
