const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Course = new mongoose.Schema({
  courseName: {type: String},
  description: {type: String},
  creator: {type: ObjectId, ref: 'User'},
  nextRoom: {type: ObjectId, ref: 'Room'},
  rooms: [{type: ObjectId, ref: 'Room'}]
});

module.exports = mongoose.model('Course', Course);
