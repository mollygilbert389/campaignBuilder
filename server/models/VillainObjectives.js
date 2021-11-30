const { Schema, model } = require('mongoose');

const VillainObjectivesSchema = new Schema({
    id: { type: Number },
    category: { type: String },
    objectives: { type: [String] }
});

const VillainObjectives = model('VillainObjectives', VillainObjectivesSchema);

module.exports = VillainObjectives;