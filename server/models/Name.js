const { Schema, model } = require('mongoose');

const NameSchema = new Schema({
  animals: { type: [String]},
  adjectives: { type: [String]},
  firstName: { type: [String]},
  lastName: { type: [String]},
});

const Name = model('Name', NameSchema);

module.exports = Name;