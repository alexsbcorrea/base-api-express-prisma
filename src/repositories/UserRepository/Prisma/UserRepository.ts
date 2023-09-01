import * as I from "../../../entities/User/DTOs";
import { IUserRepository } from "./interfaces";
import { prismaClient } from "../../../db/prismaClient";

export class UserRepository implements IUserRepository {
  async create(data: I.CreateUser): Promise<string | undefined> {
    try {
      const user = await prismaClient.user.create({
        data: data,
      });
      return "Usuário criado com sucesso.";
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
  async findUser(id: I.byID): Promise<I.GetUser | undefined> {
    const user = await prismaClient.user.findFirst({
      where: { id: String(id) },
    });

    if (!user) {
      return undefined;
    }
    return user;
  }
  async update(id: I.byID, data: Partial<I.UpdateUser>): Promise<string | undefined> {
    const checkUser = await prismaClient.user.findFirst({ where: { id } });
    if (!checkUser) {
      return "NOT_FOUND";
    }
    try {
      const user = await prismaClient.user.update({
        data: data,
        where: { id: String(id) },
      });
      return "Usuário atualizado com sucesso.";
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
  async delete(id: I.byID): Promise<string | undefined> {
    const checkUser = await prismaClient.user.findFirst({ where: { id } });
    if (!checkUser) {
      return "NOT_FOUND";
    }
    try {
      const user = await prismaClient.user.delete({
        where: { id: String(id) },
      });
      return "Usuário excluído com sucesso.";
    } catch (error) {
      console.log(error);
      return undefined;
    }
  }
  async findAll(): Promise<I.GetUser[] | []> {
    const users = await prismaClient.user.findMany();

    if (!users) {
      return [];
    }
    return users;
  }
  async findByEmail(email: string): Promise<I.GetUser | undefined> {
    const user = await prismaClient.user.findFirst({
      where: { email: email },
    });

    if (!user) {
      return undefined;
    } else {
      return user;
    }
  }
}
