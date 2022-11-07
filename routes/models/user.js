import mongoose from "mongoose";
// import dbConnection from "./conn";

// dbConnection()
const UserList = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true
    },
    rollNo: {
        type: Number,
        unique: true
    },
    active: {
        type: Boolean,
        required:false
    },
    date: {
        type: Date,
        default: Date.now
    },
    gender:{
        type:String,
        
    }
})
const User = mongoose.model("User", UserList);
export default User