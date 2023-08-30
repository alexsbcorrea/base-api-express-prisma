import { DeleteUserController } from ".";
import { DeleteUserService } from "../../../services/UserService/DeleteUser";
import { UserRepository } from "../../../repositories/UserRepository";

const repository = new UserRepository();
const service = new DeleteUserService(repository);
const controller = new DeleteUserController(service);

export default controller;
