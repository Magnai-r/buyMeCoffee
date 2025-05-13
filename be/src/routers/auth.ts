import { Router } from "express";
import { sigin } from "../controllers/auth/sign-in.controller";

export const authRouter = Router();
authRouter.post("/", sigin as any);
