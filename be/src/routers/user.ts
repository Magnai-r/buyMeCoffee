import { Router } from "express";
import { createUser, findUser, updateUserByID } from "../controllers/user";

export const userRouter = Router();
userRouter
  .post("/", createUser as any)
  .get("/", findUser as any)
  .put("/:id", updateUserByID as any);
