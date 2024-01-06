'use strict';
import { Router } from "express";
import controller from "../controllers/user.controller.js";
import middleware from "../middlewares/authJwt.js";

const router = Router();

router
    .get("/", [], controller.getAll)
    .get("/:id", controller.read)
    .post("/", [middleware.validateToken], controller.create)
    .put("/:id", controller.update)
    .delete("/:id", controller.remove)

export default router;