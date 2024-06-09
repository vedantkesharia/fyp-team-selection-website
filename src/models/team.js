// models/Team.js
import mongoose from 'mongoose';
import { Schema, model, models } from 'mongoose';

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

const Team = models.Team || mongoose.model('Team', teamSchema);

export default Team;
