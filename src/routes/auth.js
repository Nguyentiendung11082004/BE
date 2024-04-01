import express from 'express'
import { login, resgiter } from '../controllers/auth.js';


const authRouter = express.Router();


authRouter.post("/auth/register", resgiter)
authRouter.post("/auth/login", login)

export default authRouter;