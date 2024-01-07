"use strict";
import services from "../services/chat.services.js";

const getAll = async (req, res) => {
  const data = await services.getAll();
  return res.status(200).send(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const data = await services.getById(id);
  return res.status(200).send(data);
}

const create = async (req, res) => {
  const data = await services.create(req.body);
  return res.status(201).send(data);
};

const update = async (req, res) => {
  const { id } = req.params;
  const data = await services.update(id, req.body);
  return res.status(200).send(data);
}

const remove = async (req, res) => {
  const { id } = req.params;
  const data = await services.remove(id);
  return res.status(200).send(data);
}

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};