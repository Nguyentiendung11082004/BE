import User from "../models/UserModel";
import bcryptjs from "bcryptjs";
import { loginSchema, registerSchema } from "../schemas/auth";
import jwt from 'jsonwebtoken'
export const resgiter = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const {error} = registerSchema.validate(req.body,{abortEarly:false});
    if(error) {
      const messages = error.details.map((message)=>message.message);
      return res.status(400).json({
        messages,
      })
    }
   
    // ktra email
    const exitUser = await User.findOne({ email });
    if (exitUser) {
      return res.status(400).json({
        message: "email da ton tai",
      });
    }
    // ma hoa pass
    const hashPassword = await bcryptjs.hash(password, 10);
    // luu vao db
    const user = await User.create({
      username,
      email,
      password: hashPassword,
    });
    // an pass
    user.password = undefined;
    res.status(201).json({
      message: "resgiter done",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};
export const login = async (req, res) => {
  const {email,password} = req.body;
  //validate
  const {error} = loginSchema.validate(req.body,{abortEarly:false});
  if(error) {
    const messages = error.details.map((message)=>message.message);
    return res.status(400).json({
      messages,
    })
  }
  // ktra email
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({
      message: "email khong ton tai",
    });
  }
  // ktra pass
  console.log(User)
  const isPass = await bcryptjs.compare(password, user.password);
   if(!isPass) {
    return res.status(400).json({
      message:"sai mat khau"
    });
   }
   user.password = undefined;

   // tao token
   const token = await jwt.sign({userId:user._id},"xxx",{expiresIn:"1h"});

   // tra ve token
   return res.status(200).json({
    message:"Dang nhap thanh cong",
    user,
    token
   })
};
