const { Schema } = require('mongoose');

const ReligionSchema = new Schema({
  godChoices: [{
    id: { type: Number },
    option: { type: String },
    toolTipData: { type: String }
  }]
});

const Religion = model('Religion', ReligionSchema);

module.exports = Religion;