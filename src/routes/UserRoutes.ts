import { Router } from "express";

import CreateUser from "../controllers/UserController/CreateUser/instance";
import FindUser from "../controllers/UserController/FindUser/instance";
import FindAll from "../controllers/UserController/FindAll/instance";
import UpdateUser from "../controllers/UserController/UpdateUser/instance";
import DeleteUser from "../controllers/UserController/DeleteUser/instance";

import TokenValidation from "../middlewares/Token/TokenValidation";

const route = Router();

route.post("/", async (req, res) => {
  await CreateUser.create(req, res);
});
route.get("/:id", async (req, res) => {
  await FindUser.findUser(req, res);
});
route.get("/", TokenValidation.execute, async (req, res) => {
  await FindAll.findAll(req, res);
});
route.patch("/:id", async (req, res) => {
  await UpdateUser.update(req, res);
});
route.delete("/:id", async (req, res) => {
  await DeleteUser.delete(req, res);
});

export default route;
