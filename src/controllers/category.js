import Category from "../models/category";

export const getAllCategory = async (req, res) => {
  try {
    const category = await Category.find();
    res.status(200).json({
      message: "Get all done",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getDetailCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      res.status(404).json({
        message: "Category not found",
      });
    }
    res.status(200).json({
      message: "Get detail done",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);

    res.status(200).json({
      message: "Create done",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Update done",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if(!category) {
      res.status(404).json({
        message:'category not found'
      })
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
