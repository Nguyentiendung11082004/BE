import Product from "../models/products.js";
import { validateProduct } from "../schemas/auth.js";
export const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.status(200).json({
      message: "Get all done",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getOneProduct = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id).populate("category");
    if (!products) {
      res.status(404).json({
        message: "bokok not found",
      });
    }
    res.status(200).json({
      message: "Get detail done",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const createProduct = async (req, res) => {
  try {
    const products = await Product.create(req.body);
    const { error } = validateProduct.validate(req.body, { abortEarly: false });
    if (error) {
      const messages = error.details.map((message) => message.message);
      console.log(messages);
      return res.status(400).json({
        messages,
      });
    }

    res.status(200).json({
      message: "Create done",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Update done",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const products = await Product.findByIdAndDelete(req.params.id);
    if (!products) {
      res.status(404).json({
        message: "products not found",
      });
    }
    res.status(200).json({
      message: "delete done",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
