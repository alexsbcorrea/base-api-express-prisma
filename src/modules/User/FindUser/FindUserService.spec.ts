import { FindUserController } from "./FindUserController";
import { FindUserService } from "./FindUserService";
import { CreateUserController } from "../CreateUser/CreateUserController";
import { CreateUserService } from "../CreateUser/CreateUserService";
import { MockUserRepository } from "../../../repositories/UserRepository/Prisma/MockUserRepository";

describe("FindUser-Service", () => {
  beforeAll(() => {});

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

    const result = await service.create(req.body);

    expect(result.statusCode).toEqual(201);
  });

  test("Deve localizar o usuário que acabou de ser criado.", async () => {
    const repository = new MockUserRepository();
    const service = new FindUserService(repository);
    const controller = new FindUserController(service);

    const req = {
      body: {},
      params: {
        id: "9d7ccde4-45b2-4ccf-93fd-3a16eb0866a1",
      },
    };

    const res = {};

    const result = await service.find(req.params.id);

    expect(result.statusCode).toEqual(200);
  });

  test("Deve retornar erro pois o ID está incorreto.", async () => {
    const repository = new MockUserRepository();
    const service = new FindUserService(repository);
    const controller = new FindUserController(service);

    const req = {
      body: {},
      params: {
        id: "9d7ccde4-45b2-4ccf-93fd-3a16eb0866a",
      },
    };

    const res = {};

    const result = await service.find(req.params.id);

    expect(result.statusCode).toEqual(404);
  });
});
