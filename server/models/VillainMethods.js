const { Schema, model } = require('mongoose');

const VillainMethodsSchema = new Schema({
    id: { type: Number },
    category: { type: String },
    methods: { type: [String] }
});

const VillainMethods = model('VillainMethods', VillainMethodsSchema);

module.exports = VillainMethods;