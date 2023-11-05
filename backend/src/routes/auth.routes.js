'use strict';
import controller from "../controllers/auth.controller.js";
import { Router } from "express";

const router = Router();

router
    .get('/', controller.home)
    .post('/sign/in', controller.signIn)
    .post('/sign/up', controller.signUp);

export default router;