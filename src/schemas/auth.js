import Joi from "joi";

export const registerSchema = Joi.object({
  username: Joi.string().required().trim().messages({
    "any.required": "User name la truong bat buoc",
    "string.empty": "User name khong duong trong",
    "string.trim": "user name khong duoc chu[a khong trang",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Email la truong bat buoc",
    "string.email": "Email khong hop le",
    "string.empty": "Email khong duoc de trong",
  }),
  password: Joi.string().min(6).max(20).required().messages({
    "any.required": "Password la truong bat buoc",
    "string.min": "Password phai co it nhat {#limit} ky tu ",
    "string.max": "Password phai it hon {#limit} ky tu",
    "string.empty": "password khong de trong",
  }),
});
export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "any.required": "Email la truong bat buoc",
    "string.email": "Email khong hop le",
    "string.empty": "Email khong duoc de trong",
  }),
  password: Joi.string().min(6).max(20).required().messages({
    "any.required": "Password la truong bat buoc",
    "string.min": "Password phai co it nhat {#limit} ky tu",
    "string.max": "Password phai it hon {#limit} ky tu",
    "string.empty": "password khong de trong",
  }),
});

export const validateProduct = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "name la truong bat buoc",
  }),
  slug: Joi.string(),
  price: Joi.number(),

  image: Joi.string().required().messages({
    "any.required": "image la truong bat buoc",
  }),
  description: Joi.string(),
});
