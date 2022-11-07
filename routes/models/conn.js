import mongoose from "mongoose";
const dbConnection = () => {
    mongoose.connect('mongodb://localhost:27017/studentList').then(() => { console.log('connecteed to db') }).catch((err) => { console.log(err) })
}
export default dbConnection