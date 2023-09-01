import { CreateUserController } from "./CreateUserController";
import { CreateUserService } from "./CreateUserService";
import { MockUserRepository } from "../../../repositories/UserRepository/Prisma/MockUserRepository";

describe("CreateUser-Service", () => {
  beforeAll(() => {});

  test("REQ.BODY empty", async () => {
    const repository = new MockUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const body = {};

    const result = await service.create(body);

    expect(result.statusCode).toEqual(422);
  });

  test("REQ.BODY only name", async () => {
    const repository = new MockUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const body = {
      name: "Alan",
    };

    const result = await service.create(body);

    expect(result.statusCode).toEqual(422);
  });

  test("REQ.BODY with name e email", async () => {
    const repository = new MockUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const body = {
      name: "Alan",
      email: "alan.folk@test.com",
    };

    const result = await service.create(body);

    expect(result.statusCode).toEqual(422);
  });

  test("REQ.BODY with name, email, password", async () => {
    const repository = new MockUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const body = {
      name: "Alan",
      email: "alan.folk@test.com",
      password: "123456789",
    };

    const result = await service.create(body);

    expect(result.statusCode).toEqual(422);
  });

  test("REQ.BODY with name, email, password, confirmPassword (confirmPassword different)", async () => {
    const repository = new MockUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const body = {
      name: "Alan",
      email: "alan.folk@test.com",
      password: "123456789",
      confirmPassword: "12345678",
    };

    const result = await service.create(body);

    expect(result.statusCode).toEqual(422);
  });

  test("REQ.BODY with name, email, password, confirmPassword (confirmPassword equal)", async () => {
    const repository = new MockUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const body = {
      name: "Alan",
      email: "alan.folk@test.com",
      password: "123456789",
      confirmPassword: "123456789",
    };

    const result = await service.create(body);

    expect(result.statusCode).toEqual(201);
  });

  test("REQ.BODY full, email exist", async () => {
    const repository = new MockUserRepository();
    const service = new CreateUserService(repository);
    const controller = new CreateUserController(service);

    const body = {
      name: "Alan",
      email: "alan.folk@test.com",
      password: "123456789",
      confirmPassword: "123456789",
    };

    const result = await service.create(body);

    expect(result.statusCode).toEqual(422);
  });
});
