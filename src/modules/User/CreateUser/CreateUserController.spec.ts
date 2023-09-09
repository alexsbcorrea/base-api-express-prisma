import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";
import { MockUserRepository } from "../../../repositories/UserRepository/Prisma/MockUserRepository";
import { RedisCache } from "../../../cache/Redis/RedisCache";

const redis = new RedisCache();
const repository = new MockUserRepository();
const service = new CreateUserService(repository, redis);
const controller = new CreateUserController(service);

describe("Create-User-Controller", () => {
  beforeAll(() => {});

  test("Deve retornar erro, sem dados para Cadastrar.", async () => {
    const req = {
      body: {},
      params: {},
    };

    const res = {};

    const result = await controller.createMock(req, res);
    expect(result.statusCode).toEqual(422);
  });

  test("Deve retornar erro, somente Nome.", async () => {
    const req = {
      body: { name: "Alan" },
      params: {},
    };

    const res = {};

    const result = await controller.createMock(req, res);
    expect(result.statusCode).toEqual(422);
  });

  test("Deve retornar erro, somente Nome e Email.", async () => {
    const req = {
      body: { name: "Alan", email: "alan.mullert@test.com" },
      params: {},
    };

    const res = {};

    const result = await controller.createMock(req, res);
    expect(result.statusCode).toEqual(422);
  });

  test("Deve retornar erro, Nome, Email e Senha.", async () => {
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
