"use strict";
import controller from "../controllers/chat.controller.js";
import middleware from "../middlewares/authJwt.js";
import { Router } from "express";

const validateToken = middleware.validateToken;
const router = Router();

router
  .get("/", validateToken, controller.getAll)
  .get("/:id", validateToken, controller.getById)
  .post("/", validateToken, controller.create)
  .patch("/:id", validateToken, controller.update)
  .delete("/:id", validateToken, controller.remove);

export default router;
