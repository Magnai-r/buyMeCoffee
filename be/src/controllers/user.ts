import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import bcrypt from "bcrypt";

export const createUser = async (req: Request, res: Response) => {
  const { username, password, email } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword, "hashed password");

  try {
    const response = await prisma.user.create({
      data: {
        password: hashedPassword,
        email,
        name: username,
      },
    });
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};

export const findUser = async (_: never, res: Response) => {
  try {
    const response = await prisma.user.findMany();
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};

export const updateUserByID = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, password, name } = req.body;
  try {
    const response = await prisma.user.update({
      where: { id: Number(id) },
      data: { email, password, name },
    });
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};

export const deleteUserByID = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const response = await prisma.user.delete({
      where: { id: Number(id) },
    });
    return res.send({
      success: true,
      message: response,
    });
  } catch (error) {
    return res.send(error);
  }
};
