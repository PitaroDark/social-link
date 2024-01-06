"use strict";
import controller from "../controllers/auth.controller.js";
import middleware from "../middlewares/authJwt.js";
import { Router } from "express";

const validateToken = middleware.validateToken;
const router = Router();

router
  .get("/", controller.home)
  .post("/sign/in", controller.signIn)
  .post("/sign/up", controller.signUp)
  .post("/sign/out", controller.signOut)
  .post("/sign/reset", controller.resetPassword)
  .post("/test", [validateToken], controller.test);

export default router;
