"use strict";
import controller from "../controllers/comment.controller.js";
import middleware from "../middlewares/authJwt.js";
import { Router } from "express";

const router = Router();

router
  .get("/", controller.getAll)
  .get("/:id", controller.getById)
  .get("/user/:userId", controller.getByUserId)
  .get("/post/:postId", controller.getByPostId)
  .get("/content/:content", controller.getByContent)
  .post("/", controller.createComment)
  .patch("/:id", controller.updateComment)
  .delete("/:id", controller.deleteComment);

export default router;