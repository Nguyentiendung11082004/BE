import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index";
import connectMongoDB from "./config/dbconfig.js";
import cors from 'cors';
dotenv.config();
const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cors())
const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/db_nodejs";
connectMongoDB(dbUrl);
routes(app);
// app.listen(port, () => console.log("Server running port: 3000"));
export const viteNodeApp = app;