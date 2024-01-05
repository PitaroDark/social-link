"use strict";
import User from "../models/user.model.js";
import schemas from "../utils/schemas.js";
import jwt from "../libs/jwt.js";
import crypt from "bcryptjs";
import nodemailer from "nodemailer";

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

const resetPassword = async (body) => {
  const { value, error } = schemas.resetPassword.validate(body);
  if (error) return { error, message: undefined, status: 400 };
  const user = await User.findOne({ email: value.email });
  if (!user)
    return {
      error: "No se encontro el usuario",
      status: 400,
      message: undefined,
    };

  const resetToken = generateResetToken();
  const resetTokenExpiration = new Date(Date.now() + 3600000); //1 hora de expiración

  //Actualizamos los datos del usuario
  user.resetToken = resetToken;
  user.resetTokenExpiration = resetTokenExpiration;
  await user.save();

  const sent = await sendPasswordResetEmail(user.email, resetToken);
  if (!sent)
    return {
      error: "Error al enviar el correo electrónico",
      status: 500,
      message: undefined,
    };
  return {
    error: undefined,
    message: "Correo electrónico enviado con éxito para restablecer contraseña",
    status: 200,
  };
};

/**
 * Genera un token de restablecimiento de contraseña
 * @param {String} email
 * @param {String} token
 */
const sendPasswordResetEmail = async (email, token) => {
  const mailEmiter = "example@example.com";
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: mailEmiter,
      pass: "anyPassword",
    },
  });

  //Esta parte sera en el frontend
  const resetLink = `http://localhost:4000/reset-password/${token}`;

  const mailOptions = {
    from: mailEmiter,
    to: email,
    subject: "Restablecimiento de Contraseña",
    text: `Haz clic en el siguiente enlace para restablecer tu contraseña: ${resetLink}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado:", info.response);
    return true;
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return false;
  }
};

const test = async (id) => {
  const user = await User.findById(id);
  return user;
};

export default {
  signUp,
  signIn,
  resetPassword,
  test,
};
