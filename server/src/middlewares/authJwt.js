'use strict';
import env from "../config/config.js";
import jwt from "jsonwebtoken";

/**
 * Registra un usuario y retorna token
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
const validateToken = (req, res, next) => {
  const { token } = req.cookies;
  if(!token) return res.status(401).send({ msg: 'No token, authorized denied' });
  const { SECRET_TOKEN } = env;
  jwt.verify(token, SECRET_TOKEN, (err, user) => {
    if(err) return res.status(403).send({ msg: 'Invalid Token' });
    req.user = user;
    next();
  })
}

export default {
  validateToken
}