import express, { json } from "express";
import { userRouter } from "./routers/user";
import { authRouter } from "./routers/auth";
import cookieParser from "cookie-parser";

const app = express();

app.use(json());
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/auth", authRouter);

app.get("/set-cookie", (req, res) => {
  res.send("hello world");
});

app.listen(8000, () => {
  console.log("server running at http://localhost:8000");
});
