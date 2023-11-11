"use strict";
import User from "../models/user.model.js";
import schemas from "../utils/schemas.js";
import jwt from "../libs/jwt.js";
import crypt from "bcryptjs";

/**
 * Registra un usuario
 * @param {*} body
 * @returns {Promise<{
 *  error: Joi.ValidationError | undefined,
 *  err: String | undefined,
 *  id: String | undefined,
 *  token: String | undefined
 * }>}
 */
const signUp = async (body) => {
  const { value, error } = schemas.user.validate(body);
  if (error) return { error };
  const passEncrypted = await crypt.hash(value.password, 10);
  value.password = passEncrypted;
  const model = new User(value);
  const saved = await model.save();
  const { err, token } = await jwt.generateToken({ id: saved._id });
  if (err) return { err };
  return { id: saved._id, token };
};

/**
 * Inicia sesion el usuario
 * @param {*} body
 * @returns { Promise<{
 *  error: String | undefined,
 *  err: String | undefined,
 *  signed: boolean,
 *  token: String | undefined
 * }> }
 */
const signIn = async (body) => {
  const { value, error } = schemas.userOptional.validate(body);
  if (error) return { error, signed: false };
  const { username, password } = value;
  const found = await User.findOne({ username });
  if (!found) return { signed: false };
  const isMatch = await crypt.compare(password, found.password);
  if (!isMatch) return { signed: false };
  const { token, err } = await jwt.generateToken({ id: found._id });
  if (err) return { err, signed: false };
  return { signed: true, token };
};

const test = async (id) => {
  const user = await User.findById(id);
  return user;
}

export default {
  signUp,
  signIn,
  test,
};
