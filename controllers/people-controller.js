const express = require('express');
const router = express.Router();
const { People } = require('../models/modelsIndex');

// routes

// people index route
router.get('/', async function (req, res) {
  try {
    // get all people
    res.json(await People.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
});

// people create route
router.post('/', async function (req, res) {
  try {
    // create new person
    res.json(await People.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

// people show route
router.get('/:id', async function (req, res) {
  try {
    // get all people
    res.json(await People.findById(req.body.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

// people delete route
router.delete('/:id', async function (req, res) {
  try {
    // update people by id
    res.json(
      await People.findByIdAndUpdate(req.params.id, req.body, { new: true }),
    );
  } catch (error) {
    res.status(400).json(error);
  }
});

// people update route
router.put('/:id', async function (req, res) {
  try {
    // delete people by id
    res.json(await People.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
