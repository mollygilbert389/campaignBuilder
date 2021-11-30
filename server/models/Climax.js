const { Schema, model } = require('mongoose');

const ClimaxSchema = new Schema({
    id: { type: Number },
    option: { type: String }
});

const Climax = model('Climax', ClimaxSchema);

module.exports = Climax;