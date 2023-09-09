import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserService } from "./DeleteUserService";
import { CreateUserController } from "../CreateUser/CreateUserController";
import { CreateUserService } from "../CreateUser/CreateUserService";
import { MockUserRepository } from "../../../repositories/UserRepository/Prisma/MockUserRepository";
import { RedisCache } from "../../../cache/Redis/RedisCache";

const redis = new RedisCache();
const repository = new MockUserRepository();
const service = new DeleteUserService(repository, redis);
const controller = new DeleteUserController(service);

describe("Delete-User-Controller", () => {
  beforeAll(() => {});

  test("Deve criar um novo usuário no Banco de Dados", async () => {
    const redis = new RedisCache();
    const repository = new MockUserRepository();
    const service = new CreateUserService(repository, redis);
    const controller = new CreateUserController(service);

    const req = {
      body: {
        name: "Alan",
        email: "alan.mullert@test.com",
        password: "123456789",
        confirmPassword: "123456789",
      },
      params: {},
    };

    const res = {};

    const result = await service.create(req.body);

    expect(result.statusCode).toEqual(201);
  });

  test("Deve localizar e excluir o usuário que acabou de ser criado.", async () => {
    const req = {
      body: {},
      params: {
        id: "9d7ccde4-45b2-4ccf-93fd-3a16eb0866a1",
      },
    };

    const res = {};

    const result = await service.delete(req.params.id);

    expect(result.statusCode).toEqual(200);
  });

  test("Deve retornar erro pois o ID está incorreto.", async () => {
    const req = {
      body: {},
      params: {
        id: "8d8ccde4-45b2-4ccf-93fd-3a16eb0866a1",
      },
    };

    const res = {};

    const result = await service.delete(req.params.id);

    expect(result.statusCode).toEqual(404);
  });
});
