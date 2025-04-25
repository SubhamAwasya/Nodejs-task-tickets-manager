import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "agent"],
      default: "user",
    },
  },
  { timestamps: true }
);

// delete mongoose.models.User;
// delete mongoose.modelSchemas.User;

const User = mongoose.model("User", userSchema);
export default User;
