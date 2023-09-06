import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";
import { MockUserRepository } from "../../../repositories/UserRepository/Prisma/MockUserRepository";

describe("Create-User-Controller", () => {
  beforeAll(() => {});

  test("Deve retornar erro, sem dados para Cadastrar.", async () => {
    const repository = new MockUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const req = {
      body: {},
      params: {},
    };

    const res = {};

    const result = await controller.createMock(req, res);
    expect(result.statusCode).toEqual(422);
  });

  test("Deve retornar erro, somente Nome.", async () => {
    const repository = new MockUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const req = {
      body: { name: "Alan" },
      params: {},
    };

    const res = {};

    const result = await controller.createMock(req, res);
    expect(result.statusCode).toEqual(422);
  });

  test("Deve retornar erro, somente Nome e Email.", async () => {
    const repository = new MockUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const req = {
      body: { name: "Alan", email: "alan.mullert@test.com" },
      params: {},
    };

    const res = {};

    const result = await controller.createMock(req, res);
    expect(result.statusCode).toEqual(422);
  });

  test("Deve retornar erro, Nome, Email e Senha.", async () => {
    const repository = new MockUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const req = {
      body: {
        name: "Alan",
        email: "alan.mullert@test.com",
        password: "123456789",
      },
      params: {},
    };

    const res = {};

    const result = await controller.createMock(req, res);
    expect(result.statusCode).toEqual(422);
  });

  test("Deve retornar erro, Nome, Email, Senha e Confirmação (Divergente).", async () => {
    const repository = new MockUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const req = {
      body: {
        name: "Alan",
        email: "alan.mullert@test.com",
        password: "123456789",
        confirmPassword: "12345678",
      },
      params: {},
    };

    const res = {};

    const result = await controller.createMock(req, res);
    expect(result.statusCode).toEqual(422);
  });

  test("Deve cadastrar o usuário no Banco de Dados.", async () => {
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

  test("Deve retornar erro, Email já cadastrado no Banco de Dados.", async () => {
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
    expect(result.statusCode).toEqual(422);
  });
});
