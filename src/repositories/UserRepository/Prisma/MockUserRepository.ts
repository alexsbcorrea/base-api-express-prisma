import * as I from "../../../entities/User/DTOs";
import { IUserRepository } from "./interfaces";
import { v4 as uuidv4 } from "uuid";

const users = new Array();

export class MockUserRepository implements IUserRepository {
  async create(data: I.CreateUser): Promise<string | undefined> {
    const user: Partial<I.User> = {
      id: "9d7ccde4-45b2-4ccf-93fd-3a16eb0866a1",
      name: data.name,
      email: data.email,
      password: data.password,
    };
    users.push(user);
    return "Usuário criado com sucesso.";
  }
  async findUser(id: I.byID): Promise<I.GetUser | undefined> {
    const findUser = users.filter((value) => {
      return value.id == id;
    });

    if (findUser.length == 0) {
      return undefined;
    } else {
      return findUser[0];
    }
  }
  async update(id: I.byID, data: Partial<I.UpdateUser>): Promise<string | undefined> {
    const findUser = users.filter((value) => {
      return value.id == id;
    });

    if (findUser.length == 0) {
      return undefined;
    } else {
      const user = findUser[0];
      const index = users.indexOf(user);
      users.splice(index, 1);

      const updateuser = {
        id: id,
        name: data.name,
        email: data.email,
        password: data.password,
      };

      users.splice(index, 1, updateuser);

      return users[index];
    }
  }
  async delete(id: I.byID): Promise<string | undefined> {
    const findUser = users.filter((value) => {
      return value.id == id;
    });

    if (findUser.length == 0) {
      return "NOT_FOUND";
    } else {
      const user = findUser[0];
      const index = users.indexOf(user);
      users.splice(index, 1);

      return "Usuário excluído com sucesso.";
    }
  }
  async findAll(): Promise<I.GetUser[] | []> {
    return users;
  }
  async findByEmail(email: string): Promise<I.GetUser | undefined> {
    const findUser = users.filter((value) => {
      return value.email == email;
    });

    if (findUser.length == 0) {
      return undefined;
    } else {
      return findUser[0];
    }
  }
}
