const mongoose = require("mongoose");
const { Schema } = mongoose;

const VoterSchema = new Schema({
  special_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },

  fatherName: {
    type: String,
  },
  aadharCard: {
    type: Number,
  },
  gender: {
    type: String,
  },
  registrationNumber: {
    type: String,
  },
  profession: {
    type: String,
    required: true,
  },

  dob: {
    type: String,
    required: true,
  },
  VoterMobileNumber: {
    type: Number,
  },
  otp: {
    type: String,
  },
  candidate: {
    type: Schema.Types.ObjectId,
    ref: "candidate",
  },
});

module.exports = mongoose.model("Voter", VoterSchema);
