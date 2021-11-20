const { Schema, model } = require('mongoose');

const TwistSchema = new Schema({
  twists: [{
    id: { type: Number },
    option: { type: String }
  }]
});

const Twists = model('Twists', TwistSchema);

module.exports = Twists;