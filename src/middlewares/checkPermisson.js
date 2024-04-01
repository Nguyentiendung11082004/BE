import jwt from "jsonwebtoken";
import User from "../models/UserModel";

const checkPremisson = async (req, res, next) => {
  // kiểm tra token
  const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  if (!token) {
    return res.status(401).json({
      message: "Not Authenticated",
    });
  }

  // xác thực token
  try {
    const data = jwt.verify(token, "xxx");
    console.log("verified token", data);

    // kiểm tra user trong cơ sở dữ liệu
    const user = await User.findById(data.id);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // nếu tất cả mọi thứ đều hợp lệ, chuyển đến middleware tiếp theo
    next();
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

export { checkPremisson };