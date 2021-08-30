const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    nested: {
      firstName: { type: String },
      lastName: { type: String },
    },
    minLength: 4,
    maxLength: 35,
    required: [true, 'Please tell us your name!'],
  },
  email: {
    type: String,
    lowercase: true,
    required: [true, 'Please provide your email address'],
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    validate: {
      // This only works on User.CREATE and User.SAVE (NOT update)
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same',
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

// MIDDLEWARE (happens inbetween the request - response cycle)

userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // (else) hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);

  // Delete the passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

// INSTANCE METHODS: Available on all documents

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  // returns true or false
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    // True = changed
    return JWTTimestamp < changedTimestamp;
  }
  // false = NOT changed.
  return false;
};

/**
 * Encryts the reset token to
 * @returns the unencrypted resetToken to send via email
 */
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  const localTimeOffset = new Date().getTimezoneOffset() * 60 * 1000; // Acknowledge daylight saving time
  this.passwordResetExpires = Date.now() - localTimeOffset + 10 * 60 * 1000;
  return resetToken;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
// bcrypt is a hacking algorithm that protects against brute force attacks
