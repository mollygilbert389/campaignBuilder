const { Schema } = require('mongoose');

const PhysicalSchema = new Schema({
  worldOptions: { type: [String]},
  eraOptions: { type: [String]},
  featureOptions: { type: [String]},
  mapScaleOptions: { type: [String]},
  meetingOptions: { type: [String]},
  travelPoints: { type: [String]},
  worldStyle: [{
    id: { type: Number },
    image: { type: String },
    type: { type: String }
  }]
});

const Physical = model('Physical', PhysicalSchema);

module.exports = Physical;