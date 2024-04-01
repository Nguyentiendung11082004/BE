import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required:true,
  },
  email: {
    type: String,
    required:true,
    unique:true,
  },
  password: {
    type: String,
    required:true,
    min:6,
    max:20,
  },
}, {
  timestamps: true,
  versionKey: false,
},);
const User = mongoose.model("users", UserSchema);
export default User;
