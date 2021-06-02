const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {check, validationResult} = require('express-validator');

const Recruiter = require('../models/Recruiter');
const Jobs = require('../models/Jobs');



router.get('/all', async (req, res) => {
    try {
      const jobs = await Jobs.find().sort({
        date: -1,
      });
      res.json({jobs});
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

// @route     GET api/job
// @desc      Get  user job
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const jobs = await Jobs.find({user: req.user.id}).sort({
      date: -1,
    });
    res.json({jobs});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/job
// @desc      Add new job
// @access    Private
router.post(
  '/',
  [
    auth,
    [
      check('title', 'title is required')
        .not()
        .isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const {title, description ,job_type , skills_sets, experience , locations , salary_offered } = req.body;

    try {
      const newJob = new Jobs({
        title,
        description,
        job_type,
        skills_sets,
        experience,
        locations,
        salary_offered,
        user: req.user.id,
      });

      const job = await newJob.save();

      res.json(job);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);

// @route     PUT api/job/:id
// @desc      Update job
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const {title, description,job_type , skills_sets, experience , locations , salary_offered } = req.body;

  // Build contact object
  const contactFields = {};
  if (title) contactFields.title = title;
  if (description) contactFields.description = description;
  if (job_type) contactFields.job_type = job_type;
  if (skills_sets) contactFields.skill_sets = skills_sets;
  if (experience) contactFields.experience = experience;
  if (locations) contactFields.locations = locations;
  if (salary_offered) contactFields.salary_offered = salary_offered;


  try {
    let job = await Jobs.findById(req.params.id);

    if (!job) return res.status(404).json({msg: 'Job not found'});

    // Make sure recruter owns jobs
    if (job.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    job = await Jobs.findByIdAndUpdate(
      req.params.id,
      {$set: contactFields},
      {new: true},
    );

    res.json(job);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/job/:id
// @desc      Delete job
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let job = await Jobs.findById(req.params.id);

    if (!job) return res.status(404).json({msg: 'Job not found'});

        // Make sure recruter owns jobs

    if (job.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    await Jobs.findByIdAndRemove(req.params.id);

    res.json({msg: 'Job removed'});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
