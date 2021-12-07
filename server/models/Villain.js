const { Schema, model } = require('mongoose');

const VillainSchema = new Schema({
    id: { type: Number },
    option: { type: String },
    type: { type: String }
});

const Villain = model('Villain', VillainSchema);

module.exports = Villain;