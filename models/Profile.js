const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'recruiter'
  },
  

})

module.exports = mongoose.model('profile', profileSchema);
