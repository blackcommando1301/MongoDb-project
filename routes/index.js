import express from 'express'
const router = express.Router();
console.log(router)

import { registerController, usercontrollers } from './controllers';
import UserNameControllers from './controllers/UserNameControllers';
router.post('/register', registerController.register)
router.get('/user',usercontrollers.register)
router.get('/userName',UserNameControllers.register)


// console.log('dkfjsdkf')

export default router