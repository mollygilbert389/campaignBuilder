const { Schema, model } = require('mongoose');

const MeetingSelectionsSchema = new Schema({
    id: { type: Number },
    option: { type: String }
});

const MeetingSelections = model('MeetingSelections', MeetingSelectionsSchema);

module.exports = MeetingSelections;