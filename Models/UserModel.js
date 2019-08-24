const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let user = new Schema({
  username: {
    type: String,
    index: {
      unique: true
    }
  },
//   password: String,
//   createdAt: Number,
//   createdAtIso: Date,
//   gender: String,
//   email: String,
//   location: {
//     type: {
//       type: String,
//       default: "Point"
//     },
//     coordinates: [Number],
//     default: [0.0, 0.0]
//   },
//   latitude: {
//     type: Number,
//     default: 0.0
//   },
//   longitude: {
//     type: Number,
//     default: 0.0
//   },
//   is_blocked: {
//     type: Boolean,
//     default: false
//   },
//   access_token: String,
  age:{
      type: Number,
      set: function (v) { return v.toFixed(2);}
  }
});
user.index({
  location: "2dsphere"
});
module.exports = mongoose.model("User", user);
