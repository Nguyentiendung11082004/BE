import authRouter from "./auth.js";
import categoryRouter from "./category.js";
import productRouter from "./products.js";

export default function routes(app) {
  app.use("/products", productRouter);
  app.use("/categorys", categoryRouter)
  app.use("", authRouter)
}
