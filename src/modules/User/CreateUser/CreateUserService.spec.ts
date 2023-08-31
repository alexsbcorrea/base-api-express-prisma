import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";
import { UserRepository } from "../../../repositories/UserRepository/Prisma/UserRepository";

describe("CreateUser-Service", () => {
  beforeAll(() => {});

  test("Payload empty", async () => {
    const repository = new UserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const payload = {};

    const result = await service.create(payload);

    expect(result.statusCode).toEqual(422);
  });

  test("Payload only name", async () => {
    const repository = new UserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const payload = {
      name: "Alan",
    };

    const result = await service.create(payload);

    expect(result.statusCode).toEqual(422);
  });

  test("Payload with name e email", async () => {
    const repository = new UserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const payload = {
      name: "Alan",
      email: "alan.folk@test.com",
    };

    const result = await service.create(payload);

    expect(result.statusCode).toEqual(422);
  });

  test("Payload with name, email, password", async () => {
    const repository = new UserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const payload = {
      name: "Alan",
      email: "alan.folk@test.com",
      password: "123456789",
    };

    const result = await service.create(payload);

    expect(result.statusCode).toEqual(422);
  });

  test("Payload with name, email, password, confirmPassword (confirmPassword different)", async () => {
    const repository = new UserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const payload = {
      name: "Alan",
      email: "alan.folk@test.com",
      password: "123456789",
      confirmPassword: "12345678",
    };

    const result = await service.create(payload);

    expect(result.statusCode).toEqual(422);
  });

  test("Payload with name, email, password, confirmPassword (confirmPassword equal)", async () => {
    const repository = new UserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const payload = {
      name: "Alan",
      email: "alan.folk@test.com",
      password: "123456789",
      confirmPassword: "123456789",
    };

    const result = await service.create(payload);

    expect(result.statusCode).toEqual(201);
  });

  test("Payload full, email exist", async () => {
    const repository = new UserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const payload = {
      name: "Alan",
      email: "alan.folk@test.com",
      password: "123456789",
      confirmPassword: "123456789",
    };

    const result = await service.create(payload);

    expect(result.statusCode).toEqual(422);
  });
});
