'use strict';
import service from "../services/user.services.js";

const getAll = async (req, res) => {
  const users = await service.getAll();
  res.status(200).send({ users });
}

const getById = async (req, res) => {
  const { id } = req.params;
  const user = await service.getById(id);
  res.status(200).send({ user });
}

const getByUsername = async (req, res) => {
  const { username } = req.params;
  const user = await service.getByUsername(username);
  res.status(200).send({ user });
}

const getByName = async (req, res) => {
  const { name } = req.params;
  const users = await service.getByName(name);
  res.status(200).send({ users });
}

const getByLastname = async (req, res) => {
  const { lastname } = req.params;
  const users = await service.getByLastname(lastname);
  res.status(200).send({ users });
}

const getByEmail = async (req, res) => {
  const { email } = req.params;
  const users = await service.getByEmail(email);
  res.status(200).send({ users });
}

const getFriends = async (req, res) => {
  const { id } = req.params;
  const users = await service.getFriends(id);
  res.status(200).send({ users });
}

const getPosts = async (req, res) => {
  const { id } = req.params;
  const users = await service.getPosts(id);
  res.status(200).send({ users });
}

const getChats = async (req, res) => {
  const { id } = req.params;
  const users = await service.getChats(id);
  res.status(200).send({ users });
}

const createUser = async (req, res) => {
  const user = await service.createUser(req?.body);
  res.status(201).send({ user });
}

const patchUser = async (req, res) => {
  const { id } = req.params;
  const user = await service.patchUser(id, req?.body);
  res.status(200).send({ user });
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await service.deleteUser(id);
  res.status(204).send({ user });
}

export default {
  getAll,
  getById,
  getByUsername,
  getByName,
  getByLastname,
  getByEmail,
  getFriends,
  getPosts,
  getChats,
  createUser,
  patchUser,
  deleteUser,
};
