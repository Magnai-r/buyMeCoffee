import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
import bcrypt, { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";
import { secret_key } from "../../utils/env";

export const sigin = async (req: Request, res: Response) => {
  const { password, email } = req.body;
  console.log(password, email);

  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) return res.send({ message: "user not found" });

    const isMatch = compareSync(password, user.password);
    if (!isMatch) return res.send({ message: "Email or password wrong" });

    const token = jwt.sign(user, secret_key, { expiresIn: 3600 });

    return res
      .cookie("token", token, {
        maxAge: 60 * 1000 * 10,
        secure: false, // deploy hiih ued true bolgono
      })
      .send();
  } catch (error) {
    return res.send(error);
  }
};
