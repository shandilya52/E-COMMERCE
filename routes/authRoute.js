import  express  from "express";
import {registerController, loginController, updateProfileController, listUsersController} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
//router object

const router=express.Router()

// Add express.json() middleware for auth routes that need JSON parsing
router.use(express.json())

router.post('/register', registerController)
router.post('/login', loginController)
router.get('/test',requireSignIn,isAdmin)
router.get('/user-auth',requireSignIn, (req, res)=>{
    res.status(200).send({ok:true})
})

router.get('/admin-auth',requireSignIn,isAdmin, (req, res)=>{
    res.status(200).send({ok:true})
})

router.put("/profile", requireSignIn, updateProfileController)

// admin list users
router.get('/users', requireSignIn, isAdmin, listUsersController)

export default router