import User from "../models/user";
const UserNameControllers = {
    async register(req, res, next) {
        try {
            // const response = await User.find({})   ;
                    // const response = await Student.find({name:},{_id:1});
        const response = await User()

            res.send(response);
        } catch (error) {
            console.log(error)

        }
    }
}

export default UserNameControllers