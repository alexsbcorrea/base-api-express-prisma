import * as I from "../../../entities/User/DTOs";

export interface IUserRepository {
  create(data: I.CreateUser): Promise<string | undefined>;
  findUser(id: I.byID): Promise<I.GetUser | undefined>;
  update(id: I.byID, data: I.UpdateUser): Promise<string | undefined>;
  delete(id: I.byID): Promise<string | undefined>;
  findAll(): Promise<I.GetUser[] | []>;
  findByEmail(email: string): Promise<I.GetUser | undefined>;
}
