import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserService } from "./UpdateUserService";
import { CreateUserController } from "../CreateUser/CreateUserController";
import { CreateUserService } from "../CreateUser/CreateUserService";
import { FindUserController } from "../FindUser/FindUserController";
import { FindUserService } from "../FindUser/FindUserService";
import { MockUserRepository } from "../../../repositories/UserRepository/Prisma/MockUserRepository";
import { RedisCache } from "../../../cache/Redis/RedisCache";

const redis = new RedisCache();
const repository = new MockUserRepository();
const service = new UpdateUserService(repository, redis);
const controller = new UpdateUserController(service);

describe("Update-User-Controller", () => {
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

  test("Deve retornar erro, sem dados", async () => {
    const req = {
      body: {},
      params: {
        id: "9d7ccde4-45b2-4ccf-93fd-3a16eb0866a1",
      },
    };

    const res = {};

    const result = await service.update(req.params.id, req.body);

    expect(result.statusCode).toEqual(422);
  });

  test("Deve retornar erro, com dados, porém sem o ID", async () => {
    const req = {
      body: {
        name: "AlanS",
        email: "alans.mullert@test.com",
        password: "S123456789",
        confirmPassword: "S123456789",
      },
      params: {
        id: "",
      },
    };

    const res = {};

    const result = await service.update(req.params.id, req.body);

    expect(result.statusCode).toEqual(422);
  });

  test("Deve retornar erro, somente o nome", async () => {
    const req = {
      body: { name: "AlanS" },
      params: {
        id: "9d7ccde4-45b2-4ccf-93fd-3a16eb0866a1",
      },
    };

    const res = {};

    const result = await service.update(req.params.id, req.body);

    expect(result.statusCode).toEqual(422);
  });

  test("Deve retornar erro, somente nome e email", async () => {
    const req = {
      body: { name: "AlanS", email: "alans.mullert@test.com" },
      params: {
        id: "9d7ccde4-45b2-4ccf-93fd-3a16eb0866a1",
      },
    };

    const res = {};

    const result = await service.update(req.params.id, req.body);

    expect(result.statusCode).toEqual(422);
  });

  test("Deve retornar erro, somente nome, email e senha", async () => {
    const req = {
      body: {
        name: "AlanS",
        email: "alans.mullert@test.com",
        password: "S123456789",
      },
      params: {
        id: "9d7ccde4-45b2-4ccf-93fd-3a16eb0866a1",
      },
    };

    const res = {};

    const result = await service.update(req.params.id, req.body);

    expect(result.statusCode).toEqual(422);
  });

  test("Deve retornar erro, somente nome, email, senha e confirmação de senha, porém não correspondem.", async () => {
    const req = {
      body: {
        name: "AlanS",
        email: "alans.mullert@test.com",
        password: "S123456789",
        confirmPassword: "R123456789",
      },
      params: {
        id: "9d7ccde4-45b2-4ccf-93fd-3a16eb0866a1",
      },
    };

    const res = {};

    const result = await service.update(req.params.id, req.body);

    expect(result.statusCode).toEqual(422);
  });

  test("Deve retornar erro pois o ID está incorreto.", async () => {
    const req = {
      body: {
        name: "AlanS",
        email: "alans.mullert@test.com",
        password: "S123456789",
        confirmPassword: "S123456789",
      },
      params: {
        id: "8d8ccde4-45b2-4ccf-93fd-3a16eb0866a1",
      },
    };

    const res = {};

    const result = await service.update(req.params.id, req.body);

    expect(result.statusCode).toEqual(404);
  });

  test("Deve localizar e atualizar o usuário que acabou de ser criado. (Sem alterar a Senha)", async () => {
    const findService = new FindUserService(repository);
    const findConroller = new FindUserController(findService);

    const userId = "9d7ccde4-45b2-4ccf-93fd-3a16eb0866a1";

    const checkUser = await findService.find(userId);

    const currentPassword = checkUser.body.password;

    const req = {
      body: {
        name: "Alan T.",
        email: "alan.t@test.com1",
        password: currentPassword,
        confirmPassword: currentPassword,
      },
      params: {
        id: "9d7ccde4-45b2-4ccf-93fd-3a16eb0866a1",
      },
    };

    const res = {};

    const result = await service.update(req.params.id, req.body);

    expect(result.statusCode).toEqual(200);
  });

  test("Deve localizar e atualizar o usuário que acabou de ser criado.", async () => {
    const req = {
      body: {
        name: "Alan S.",
        email: "alans.s@test.com",
        password: "S123456789",
        confirmPassword: "S123456789",
      },
      params: {
        id: "9d7ccde4-45b2-4ccf-93fd-3a16eb0866a1",
      },
    };

    const res = {};

    const result = await service.update(req.params.id, req.body);

    expect(result.statusCode).toEqual(200);
  });
});
