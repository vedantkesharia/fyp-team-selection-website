// models/Team.js
import mongoose from 'mongoose';
import { Schema, model } from 'mongoose';

const teamSchema = new Schema({
  teamLeader: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  teamMembers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
