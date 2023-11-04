'use strict';
import controller from "../controllers/auth.controller.js";
import { Router } from "express";

const router = Router();

router
    .get('/', controller.home)

export default router;