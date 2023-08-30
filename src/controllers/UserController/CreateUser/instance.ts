import { UserRepository } from "../../../repositories/UserRepository";
import { CreateUserService } from "../../../services/UserService/CreateUser";
import { CreateUserController } from ".";

const repository = new UserRepository();
const service = new CreateUserService(repository);
const controller = new CreateUserController(service, repository);

export default controller;
