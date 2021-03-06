const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
const User = new mongoose.Schema(
  {
    courseTemplates: {
      type: [{ type: ObjectId, ref: "CourseTemplate" }],
      default: []
    },
    courses: { type: [{ type: ObjectId, ref: "Course" }], default: [] },
    rooms: { type: [{ type: ObjectId, ref: "Room" }], default: [] },
    activities: { type: [{ type: ObjectId, ref: "Activity" }], default: [] },
    // roomNotifications: {
    //   access: [{
    //     notificationType: {type: String, enum: ['grantedAccess', 'requestAccess', 'newMember']}, // grantedAccess || requestAccess || newMember (if user gained access through entry code)
    //     _id: {type: ObjectId, ref: 'Room'},
    //     user: {type: ObjectId, ref: 'User'},
    //   }],
    //   // newRoom: [{
    //   //   _id: {type: ObjectId, ref: 'Room'}
    //   // }]
    // },
    // courseNotifications: {
    //   access: [{
    //     notificationType: {type: String, enum: ['grantedAccess', 'requestAccess', 'assignedRoom', 'newMemer']},
    //     _id: {type: ObjectId, ref: 'Course'},
    //     user: {type: ObjectId, ref: 'User'},
    //     room: {type: ObjectId, ref: 'Room'}
    //   }],
    // },
    notifications: {
      type: [{ type: ObjectId, ref: "Notification" }],
      default: []
    },
    // newRoom: [{
    //   notificationType: String,
    //   _id: {type: ObjectId, ref: 'Course'},
    //   room: {type: ObjectId, ref: 'Room'}
    // }]
    firstName: { type: String },
    lastName: { type: String },
    username: { type: String, required: true },
    email: {
      type: String,
      validate: {
        validator: email => {
          var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          return emailRegex.test(email);
        },
        message: "{VALUE} is not a valid email address"
      }
    },
    accountType: { type: String, enum: ["participant", "facilitator", "temp"] },
    bothRoles: { type: Boolean, default: false },
    password: {
      type: String,
      required: function() {
        return this.accountType !== "temp";
      }
    },
    isAdmin: { type: Boolean, default: false },
    seenTour: { type: Boolean, default: false },
    socketId: { type: String },
    isTrashed: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
