"use strict";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
const secret = process.env.SECRET_TOKEN;

/**
 * Genera un token
 * @param {*} payload
 * @param {jwt.SignOptions} expiresIn
 * @returns {Promise<{
 *  err: String | undefined,
 *  token: String | undefined
 * }>}
 */
const generateToken = (payload, optionsSign = { expiresIn: "1d" }) => {
  return new Promise((res, rej) => {
    jwt.sign(payload, secret, optionsSign, (err, token) => {
      if (err) rej({ err });
      res({ token });
    });
  });
};

export default {
  generateToken,
};
