import mongoose from "mongoose";
import dbConnection from "./conn";

dbConnection()
const ParentsList = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    // gender:{
    //     type:String,  
    // },
    // relation:{
    //     type:String,
    //     required:true
    // },
    // StudentId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user',
    //     required: true,
    // },
})
const Parents = mongoose.model("Parents", ParentsList);
export default Parents