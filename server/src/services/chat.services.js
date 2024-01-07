"use strict";
import Chat from "../models/chat.model.js";
import schemas from "../utils/schemas.js";

const getAll = async () => {
  return await Chat.find();
};

const getById = async (id) => {
  return await Chat.findById(id);
};

const getByParticipants = async (participants) => {
  return await Chat.find({ participants }).sort({ createdAt: -1 });
};

const create = async (data) => {
  const { value, error } = schemas.chat.validate(data);
  if (error) throw error;
  return await Chat.create(value);
};

const update = async (id, data) => {
  const { value, error } = schemas.chatOptional.validate(data);
  if (error) throw error;
  const model = await Chat.findByIdAndUpdate(id, value);
  return model;
};

const remove = async (id) => {
  return await Chat.findByIdAndDelete(id);
};

export default {
  getAll,
  getById,
  create,
  update,
  remove,
};
