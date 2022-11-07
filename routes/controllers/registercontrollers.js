import Parents from "../models/ParentsModel.js";
import User from "../models/user.js";

const registerController={
    async register(req,res,next){
        // if(req.body)
            try {
                const response = new User(req.body)
                console.log(response,'--------=============<>>>>>>>?????????')
                const response1= new Parents(req.body.guardianDetails)

                const createParent=await response1.save()
                const createUser = await response.save()
            res.status(200).json({ msg: createUser,createParent})
            } catch (error) {
                console.log(error)
                res.status(400).json({ msg: error })
            }
        
        }
    }

    



export default registerController

