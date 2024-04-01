import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getOneProduct,
  updateProduct,
} from "../controllers/products.js";
import { checkPremisson } from "../middlewares/checkPermisson.js";

const productsRouter = express.Router();

productsRouter.get("/", getAllProduct);
productsRouter.post("/", checkPremisson, createProduct);
productsRouter.get("/:id", getOneProduct);
productsRouter.put("/:id", checkPremisson, updateProduct);
productsRouter.delete("/:id", checkPremisson, deleteProduct);

export default productsRouter;
