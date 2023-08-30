import { GetUserController } from ".";
import { GetUserService } from "../../../services/UserService/GetUser";
import { UserRepository } from "../../../repositories/UserRepository";

const repository = new UserRepository();
const service = new GetUserService(repository);
const controller = new GetUserController(service);

export default controller;
