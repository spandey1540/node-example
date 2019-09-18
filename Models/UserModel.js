const mongoose = require("mongoose");
const moment = require("moment");

const Schema = mongoose.Schema;
let user = new Schema(
  {
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      index: true
    },
    name: {
      firstname: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
      },
      lastname: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
      }
    },
    password: {
      type: String
    },
    createdAtIso: Date,
    gender: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true
    },
    location: {
      type: {
        type: String,
        default: "Point"
      },
      coordinates: [Number],
      default: [0.0, 0.0]
    },
    latitude: {
      type: Number,
      default: 0.0
    },
    longitude: {
      type: Number,
      default: 0.0
    }
  },
  { timestamps: true }
);
user.index({
  location: "2dsphere"
});
module.exports = mongoose.model("User", user);
