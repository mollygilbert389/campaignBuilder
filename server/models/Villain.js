const { Schema } = require('mongoose');

const VillainSchema = new Schema({
  villainObjectives: [{
    id: { type: Number },
    objectiveCat: { type: String },
    objectives: { type: [String] }
  }],
  villainMethods: [{
    id: { type: Number },
    methodCat: { type: String },
    methods: { type: [String] }
  }],
  villainWeakness: [{
    id: { type: Number },
    option: { type: String }
  }],
});

const Villain = model('Villain', VillainSchema);

module.exports = Villain;