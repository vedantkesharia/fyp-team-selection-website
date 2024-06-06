// models/User.js
import { Schema, model, models } from 'mongoose';
import mongoose from 'mongoose';
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  sapid: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  div: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  flag: {
    type: Boolean,
    default: false
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  user_type: {
    type: String,
    enum: ['leader', 'normal'],
    default: 'normal'
  },
  year:{
    type: String,
    enum: ['FE', 'SE', 'TE', 'BE'],
    default: 'FE'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
