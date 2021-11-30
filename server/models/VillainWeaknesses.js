const { Schema, model } = require('mongoose');

const VillainWeaknessesSchema = new Schema({
    id: { type: Number },
    option: { type: String }
});

const VillainWeaknesses = model('VillainWeaknesses', VillainWeaknessesSchema);

module.exports = VillainWeaknesses;