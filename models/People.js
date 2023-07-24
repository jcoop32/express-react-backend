const mongoose = require('mongoose');

const PeopleSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    title: String,
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('People', PeopleSchema);
