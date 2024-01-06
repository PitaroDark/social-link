"use strict";
import { Router } from "express";
import controller from "../controllers/user.controller.js";
import middleware from "../middlewares/authJwt.js";

const validateToken = middleware.validateToken;
const router = Router();

router
  .get("/", [validateToken], controller.getAll)
  .get("/:id", [validateToken], controller.getById)
  .get("/username/:username", [validateToken], controller.getByUsername)
  .get("/name/:name", [validateToken], controller.getByName)
  .get("/lastname/:lastname", [validateToken], controller.getByLastname)
  .get("/email/:email", [validateToken], controller.getByEmail)
  .get("/friends/:id", [validateToken], controller.getFriends)
  .get("/posts/:id", [validateToken], controller.getPosts)
  .get("/chats/:id", [validateToken], controller.getChats)
  .post("/", [validateToken], controller.createUser)
  .patch("/:id", [validateToken], controller.patchUser)
  .delete("/:id", [validateToken], controller.deleteUser);

export default router;
