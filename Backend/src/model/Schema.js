import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
  },
  {
    versionKey: false,
  }
);

const hostelSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    location_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "location",
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const locationModel = mongoose.model("location", locationSchema);
const hostelModel = mongoose.model("hostel", hostelSchema);

export { locationModel, hostelModel };
