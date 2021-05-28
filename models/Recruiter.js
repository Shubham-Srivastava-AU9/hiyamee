const mongoose = require('mongoose');

const RecruiterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
     
      role: {
        type:String,
        default: "recruiter"
      },
      date: {
        type: Date,
        default: Date.now
      }
    });

module.exports = mongoose.model('recruiter', RecruiterSchema);
