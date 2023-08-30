import {
  User,
  CreateUser,
  UpdateUser,
  GetUser,
  byID,
} from "../../entities/User/DTOs";
import { IUserRepository } from "../../entities/User/Interfaces";

import { prismaClient } from "../../db/prismaClient";

export class UserRepository implements IUserRepository {
  async create(data: CreateUser): Promise<string | undefined> {
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
  async get(id: byID): Promise<GetUser | undefined> {
    const user = await prismaClient.user.findFirst({
      where: { id: String(id) },
    });

    if (!user) {
      return undefined;
    }
    return user;
  }
  async update(
    id: byID,
    data: Partial<UpdateUser>
  ): Promise<string | undefined> {
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
  async delete(id: byID): Promise<string | undefined> {
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
  async getall(): Promise<GetUser[] | []> {
    const users = await prismaClient.user.findMany();

    if (!users) {
      return [];
    }
    return users;
  }
  async getByEmail(email: string): Promise<GetUser | undefined> {
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
