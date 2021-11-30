const { Schema, model } = require("mongoose");

const PatronSchema = new Schema({
  id: { type: Number },
  option: { type: String },
  type: { type: String },
});

const Patron = model("Patron", PatronSchema);

module.exports = Patron;
