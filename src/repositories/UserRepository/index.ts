import { User, PartialUser, byID } from "../../entities/User/DTOs";
import { IUserRepository } from "../../entities/User/Interfaces";

import prisma from "../../db/prismaClient";

export class UserRepository implements IUserRepository {
  async create(data: PartialUser): Promise<string | undefined> {
    try {
      const user = await prisma.user.create({
        data: data,
      });
      return "Usuário criado com sucesso.";
    } catch (error) {
      return undefined;
    }
  }
  async get(id: byID): Promise<User | undefined> {
    const user = await prisma.user.findFirst({
      where: { id: Number(id) },
    });

    if (!user) {
      return undefined;
    }
    return user;
  }
  async update(id: byID, data: PartialUser): Promise<string | undefined> {
    try {
      const user = await prisma.user.update({
        data: data,
        where: { id: Number(id) },
      });
      return "Usuário atualizado com sucesso.";
    } catch (error) {
      return undefined;
    }
  }
  async delete(id: byID): Promise<string | undefined> {
    try {
      const user = await prisma.user.delete({
        where: { id: Number(id) },
      });
      return "Usuário excluído com sucesso.";
    } catch (error) {
      return undefined;
    }
  }
  async getall(): Promise<User[] | undefined> {
    const users = await prisma.user.findMany();

    if (!users) {
      return undefined;
    }
    return users;
  }
}
