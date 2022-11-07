import User from "../models/user"

const usercontrollers = {
    async register(req, res, next) {
        try {
            // const response = await User.find({rollNo:{$exists:true}});
            const response = await User.find({rollNo:{$exists:true}});
            res.send(response)
        } catch (error) {
            console.log(error)
        }
    }
}
export default usercontrollers