const { Schema } = require('mongoose');

const MonsterSchema = new Schema({
  maps: [{ 
    id: { type: Number },
    name: { type: String },
    category: { type: String },
    subcategry: { type: String },
    type: { type: String },
    area: { type: [String] },
    ideal: { type: String }
  }]
});

const Monster = model('Monster', MonsterSchema);

module.exports = Monster;