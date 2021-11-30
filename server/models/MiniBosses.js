const { Schema, model } = require('mongoose');

const MiniBossesSchema = new Schema({
    id: { type: Number },
    name: { type: String },
    category: { type: String },
    subcategory: { type: String },
    type: { type: String },
    area: { type: [String] },
    ideal: { type: String },
    bossTypes: { type: [String] }
});

const MiniBosses = model('MiniBosses', MiniBossesSchema);

module.exports = MiniBosses;