'use strict';
import service from "../services/auth.services.js";

/**
 * Retorna un mensaje de bienvenida 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const home = async (req, res) => {
    return res.send({ msg: `Hola, estas en la ruta 'auth'` });
}

/**
 * Inicia sesion y retorna token 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const signIn = async (req, res) => {
    return res.status(200).send({ msg: 'IN PROCESS' });
}

/**
 * Registra un usuario y retorna token 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
const signUp = async (req, res) => {
    return res.status(200).send({ msg: 'IN PROCESS' });
}

export default {
    home,
    signIn,
    signUp,
}