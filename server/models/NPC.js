const { Schema } = require('mongoose');

const NPCSchema = new Schema({
  NPCAppearance: [{
    id: { type: Number },
    option: { type: String }
  }],
  NPCTalents: [{
    id: { type: Number },
    option: { type: String }
  }],
  NPCMannerisms: [{
    id: { type: Number },
    option: { type: String }
  }],
  NPCInteractionTraits: [{
    id: { type: Number },
    option: { type: String }
  }],
  NPCIdeals: [{
    id: { type: Number },
    option: { type: String },
    list: { type: [String] }
  }],
  NPCBonds: [{
    id: { type: Number },
    option: { type: String }
  }],
  NPCFlawsSecrets: [{
    id: { type: Number },
    option: { type: String }
  }]
});

const NPC = model('NPC', NPCSchema);

module.exports = NPC;