const { Schema } = require('mongoose');

const PatronSchema = new Schema({
  patronMannerisms: [{
    id: { type: Number },
    option: { type: String }
  }],
  patronTraits: [{
    id: { type: Number },
    option: { type: String }
  }],
  patronChoices: { type: [String] }
});

const Patron = model('Patron', PatronSchema);

module.exports = Patron;