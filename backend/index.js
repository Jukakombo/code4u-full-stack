import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/user.js";
import contactsRouter from "./routes/contact.js";

dotenv.config();
const app = express();
// middlewares
app.use(cors());
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
// default routes
app.get("/", function (req, res) {
  res.send("Hello we are working on the backend application");
});
app.use("/contacts", contactsRouter);
app.use("/users", userRoutes);
// connect to the mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Your Application is running on the port: http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(
      "Sorry there's a problem on your file failing to compile!",
      error
    );
  });
