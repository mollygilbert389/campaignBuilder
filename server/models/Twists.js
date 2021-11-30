const { Schema, model } = require('mongoose');

const TwistSchema = new Schema({
  id: { type: Number },
  option: { type: String }
});

const Twists = model('Twists', TwistSchema);

module.exports = Twists;