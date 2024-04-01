import express from "express";
import { createCategory, deleteCategory, getAllCategory, getDetailCategory, updateCategory } from "../controllers/category.js";

const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategory)
categoryRouter.get("/:id", getDetailCategory)
categoryRouter.post("/", createCategory)
categoryRouter.put("/:id", updateCategory)
categoryRouter.delete("/:id", deleteCategory)

export default categoryRouter;