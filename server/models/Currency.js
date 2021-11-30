const { Schema, model } = require('mongoose');

const CurrencySchema = new Schema({
  id: { type: Number },
  option: { type: String }
});

const Currency = model('Currency', CurrencySchema);

module.exports = Currency;