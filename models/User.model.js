const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    login: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    fio: {
      type: String
    },
    isTeacher: {
      type: Boolean
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
