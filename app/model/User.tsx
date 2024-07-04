import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    mobile: {
      type: String,
    },
    pincode: {
      type: String,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    bio: {
      type: String,
    },
    birthdate: {
      type: Date,
    },
    profileImage: {
      type: String,
    },
    bannerImage: {
      type: String,
    },
  },

  { timestamps: true }
);

export const User = models?.User || model("User", UserSchema);
