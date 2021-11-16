const { Schema } = require('mongoose');

const ClimaxSchema = new Schema({
  climaxOptions: [{ 
    id: { type: Number },
    option: { type: String }
  }],
});

const Climax = model('Climax', ClimaxSchema);

module.exports = Climax;