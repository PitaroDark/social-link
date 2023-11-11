"use strict";
import service from "../services/auth.services.js";

/**
 * Retorna un mensaje de bienvenida
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const home = async (req, res) => {
  return res.send({ msg: `Hola, estas en la ruta 'auth'` });
};

/**
 * Inicia sesion y retorna token
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const signIn = async (req, res) => {
  const { error, err, signed, token } = await service.signIn(req?.body);
  if (error) return res.status(400).send(error);
  if (err) return res.status(500).send({ error: err });
  if (!signed) return res.status(400).send({ signed });
  res.cookie('token', token);
  return res.status(200).send({ signed });
};

/**
 * Registra un usuario y retorna token
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const signUp = async (req, res) => {
  const { error, err, id, token } = await service.signUp(req?.body);
  if (error) return res.status(400).send(error);
  if (err) return res.status(500).send({ error: err });
  res.cookie('token', token);
  return res.status(200).send({ id });
};

/**
 * Cierra la sesion del usuario
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const signOut = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  }).end();
};

const test = async (req, res) => {
    const { id } = req.user;
    const user = await service.test(id)
    return res.send(user);
}
export default {
  home,
  signIn,
  signUp,
  signOut,
  test,
};
