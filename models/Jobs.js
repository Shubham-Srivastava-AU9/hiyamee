const mongoose = require('mongoose');

const jobsSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'recruiter'
  },
  
  title: {
    type: String,
    required: [true, "Please provide a name for the position"]
},
description: {
    type: String,
},
job_type: {
    type: String
},
skill_sets: [{
    name: String,
    description: String
}],
experience: {
    minimum: {
        type: Number,
        required: [true, "Please provide the required experience for the position"]
    },
    maximum: {
        type: Number,
        required: [true, "Please provide the required experience for the position"]
    },
},
locations: [{
    type: String,
}],
salary_offered: {
    minimum: Number,
    maximum: Number,
    negotiable: Boolean
},
status: {
    type: String,
    default:"Active"
},
// values_required: {
//     type: String,
// },
active: {
    type: Boolean,
    default: true
},
  date: {
    type: Date,
    default: Date.now
  }
  
});

module.exports = mongoose.model('jobs', jobsSchema);
