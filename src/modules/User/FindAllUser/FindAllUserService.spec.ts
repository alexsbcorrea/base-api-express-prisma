import { FindAllUserController } from "./FindAllUserController";
import { FindAllUserService } from "./FindAllUserService";
import { CreateUserController } from "../CreateUser/CreateUserController";
import { CreateUserService } from "../CreateUser/CreateUserService";
import { MockUserRepository } from "../../../repositories/UserRepository/Prisma/MockUserRepository";
import { RedisCache } from "../../../cache/Redis/RedisCache";

describe("FindAll-User-Service", () => {
  beforeAll(() => {});

  test("Retornar uma Lista vazia.", async () => {
    const redis = new RedisCache();
    const repository = new MockUserRepository();
    const service = new FindAllUserService(repository, redis);
    const controller = new FindAllUserController(service);

    const req = {};

    const res = {};

    const result = await service.findAll();

    expect(result.statusCode).toEqual(404);
  });

  test("Deve criar um novo usuário no Banco de Dados", async () => {
    const repository = new MockUserRepository();
    const service = new CreateUserService(repository);
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

    const result = await controller.createMock(req, res);

    expect(result.statusCode).toEqual(201);
  });

  test("Retornar uma Lista com 1 Usuário.", async () => {
    const redis = new RedisCache();
    const repository = new MockUserRepository();
    const service = new FindAllUserService(repository, redis);
    const controller = new FindAllUserController(service);

    const req = {};

    const res = {};

    const result = await service.findAll();

    expect(result.statusCode).toEqual(200);
  });
});
