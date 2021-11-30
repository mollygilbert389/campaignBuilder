const { Schema, model } = require('mongoose');

const CampaignNamesSchema = new Schema({
  id: { type: Number },
  type: { type: String },
  option: { type: String }
});

const CampaignNames = model('CampaignNames', CampaignNamesSchema);

module.exports = CampaignNames;