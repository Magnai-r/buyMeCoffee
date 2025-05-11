import { Request, Response } from "express";
import { prisma } from "../../utils/prisma";
import bcrypt from "bcrypt";

const checkUser = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { name: username } });
    if (user) {
      return res.send({ message: "username already taken" });
    }
    return res.send({ message: "Username available" });
  } catch (error) {}
};

export const sigup = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log(hashedPassword, "hashed password");

  try {
    const response = await prisma.user.create({
      data: {
        password: hashedPassword,
        email,
        name: username,
      },
    });
    // res.clearCookie('token').send()
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};
