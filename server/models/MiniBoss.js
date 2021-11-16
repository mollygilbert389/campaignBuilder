const { Schema } = require('mongoose');

const MiniBossSchema = new Schema({
  maps: [{ 
    id: { type: Number },
    name: { type: String },
    category: { type: String },
    subcategry: { type: String },
    type: { type: String },
    area: { type: [String] },
    ideal: { type: String },
    bossTypes: { type: [String] }
  }]
});

const MiniBoss = model('MiniBoss', MiniBossSchema);

module.exports = MiniBoss;