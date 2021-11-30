const { Schema, model } = require('mongoose');

const MeetingLocationsSchema = new Schema({
    id: { type: Number },
    option: { type: String }
});

const MeetingLocations = model('MeetingLocations', MeetingLocationsSchema);

module.exports = MeetingLocations;