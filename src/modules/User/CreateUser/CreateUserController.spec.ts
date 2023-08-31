import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";
import { UserRepository } from "../../../repositories/UserRepository/Prisma/UserRepository";

describe("CreateUser-Service", () => {
  beforeAll(() => {});

  test("Payload empty", async () => {
    const repository = new UserRepository();
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

  test("Payload only name", async () => {
    const repository = new UserRepository();
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

  test("Payload with name e email", async () => {
    const repository = new UserRepository();
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

  test("Payload with name, email, password", async () => {
    const repository = new UserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const req = {
      body: { name: "Alan", email: "alan.mullert@test.com", password: "123456789" },
      params: {},
    };

    const res = {};

    const result = await controller.createMock(req, res);
    expect(result.statusCode).toEqual(422);
  });

  test("Payload with name, email, password, confirmPassword (confirmPassword different)", async () => {
    const repository = new UserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const req = {
      body: { name: "Alan", email: "alan.mullert@test.com", password: "123456789", confirmPassword: "12345678" },
      params: {},
    };

    const res = {};

    const result = await controller.createMock(req, res);
    expect(result.statusCode).toEqual(422);
  });

  test("Payload with name, email, password, confirmPassword (confirmPassword equal)", async () => {
    const repository = new UserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const req = {
      body: { name: "Alan", email: "alan.mullert@test.com", password: "123456789", confirmPassword: "123456789" },
      params: {},
    };

    const res = {};

    const result = await controller.createMock(req, res);
    expect(result.statusCode).toEqual(201);
  });

  test("Payload full, email exist", async () => {
    const repository = new UserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const req = {
      body: { name: "Alan", email: "alan.mullert@test.com", password: "123456789", confirmPassword: "123456789" },
      params: {},
    };

    const res = {};

    const result = await controller.createMock(req, res);
    expect(result.statusCode).toEqual(422);
  });
});
