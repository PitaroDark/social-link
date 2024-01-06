"use strict";
import controller from "../controllers/post.controller.js";
import middleware from "../middlewares/authJwt.js";
import { Router } from "express";

const validateToken = middleware.validateToken;
const router = Router();

router
  .get("/", [validateToken], controller.getAll)
  .get("/:id", [validateToken], controller.getById)
  .get("/user/:userId", [validateToken], controller.getByUserId)
  .get("/content/:content", [validateToken], controller.getByContent)
  .get("/timestamp/:timestamp", [validateToken], controller.getByTimestamp)
  .get("/shared/:shared", [validateToken], controller.getBySharedPost)
  .get("/likes/:likes", [validateToken], controller.getByLikes)
  .get("/loves/:loves", [validateToken], controller.getByLoves)
  .get("/funny/:funny", [validateToken], controller.getByFunny)
  .get("/angry/:angry", [validateToken], controller.getByAngry)
  .get("/comments/:comments", [validateToken], controller.getByComments)
  .post("/", [validateToken], controller.createPost)
  .patch("/:id", [validateToken], controller.updatePost)
  .delete("/:id", [validateToken], controller.deletePost);

export default router;
