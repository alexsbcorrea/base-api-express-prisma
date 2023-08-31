import * as I from "../../../entities/User/DTOs";
import { IUserRepository } from "./interfaces";

export class MockUserRepository implements IUserRepository {
  async create(data: I.CreateUser): Promise<string | undefined> {
    return "Usuário criado com sucesso.";
  }
  async findUser(id: I.byID): Promise<I.GetUser | undefined> {
    const user: I.GetUser = {
      id: "asdfasdfasdfasd",
      name: "Alan",
      email: "alan.t.s@test.com",
      password: "123456789",
    };
    return user;
  }
  async update(id: I.byID, data: Partial<I.UpdateUser>): Promise<string | undefined> {
    return "Usuário atualizado com sucesso.";
  }
  async delete(id: I.byID): Promise<string | undefined> {
    return "Usuário excluído com sucesso.";
  }
  async findAll(): Promise<I.GetUser[] | []> {
    const users = [
      { id: "um", name: "Alan", email: "alan.b.c@test.com", password: "123456789" },
      { id: "dois", name: "Alan", email: "alan.d.e@test.com", password: "123456789" },
    ];
    return users;
  }
  async findByEmail(email: string): Promise<I.GetUser | undefined> {
    const user: I.GetUser = {
      id: "asdfasdfasdfasd",
      name: "Alan",
      email: "alan.t.s@test.com",
      password: "123456789",
    };
    return user;
  }
}
