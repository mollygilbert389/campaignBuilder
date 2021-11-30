const { Schema, model } = require('mongoose');

const TravelPointsSchema = new Schema({
  id: { type: Number },
  option: { type: String }
});

const TravelPoints = model('TravelPoints', TravelPointsSchema);

module.exports = TravelPoints;