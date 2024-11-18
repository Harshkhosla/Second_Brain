import mongoose from "mongoose"
const UserSchema = new mongoose.Schema({

  username: { type: String, required: true, unique: true },
  eamil:{type:String , required:true, unique:true},
  password: { type: String, required: true },

})


export const UserDetails = mongoose.model("User_Database", UserSchema);