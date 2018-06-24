const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const Room = new mongoose.Schema({
  roomName: {type: String},
  description: {type: String},
  creator: {type: ObjectId, ref: 'User'},
  tabListKey: [{type: ObjectId, ref: 'Tab'}],
  chat: [{type: ObjectId, ref: 'Message'}],
});

module.exports = mongoose.model('Room', Room);
