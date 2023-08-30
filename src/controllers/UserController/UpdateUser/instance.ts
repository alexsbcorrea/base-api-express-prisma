import { UpdateUserController } from ".";
import { UpdateUserService } from "../../../services/UserService/UpdateUser";
import { UserRepository } from "../../../repositories/UserRepository";

const repository = new UserRepository();
const service = new UpdateUserService(repository);
const controller = new UpdateUserController(service);

export default controller;
