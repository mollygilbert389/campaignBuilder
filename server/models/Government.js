const { Schema, model } = require('mongoose');

const GovernmentSchema = new Schema({
  currencyOptions: { type: [String] },
  languages: { type: [String] },
  governments:[{
    id: { type: Number },
    name: { type: String },
    description: { type: String }
  }]
});

const Government = model('Government', GovernmentSchema);

module.exports = Government;