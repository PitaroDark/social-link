'use strict';
import User from "../models/user.model.js";
import schemas from "../utils/schemas.js";

const getAll = async () => {
  const users = await User.find();
  return users;
}

const getById = async (id) => {
  const user = await User.findById(id);
  return user;
}

const getByUsername = async (username) => {
  const user = await User.findOne({ username });
  return user;
}

const getByName = async (name) => {
  const users = await User.find({ name });
  return users;
}

const getByLastname = async (lastname) => {
  const users = await User.find({ lastname });
  return users;
}

const getByEmail = async (email) => {
  const users = await User.find({ email });
  return users;
}

const getFriends = async (id) => {
  const users = await User.findById(id).populate('friends');
  return users.friends;
}

const getPosts = async (id) => {
  const users = await User.findById(id).populate('posts');
  return users.posts;
}

const getChats = async (id) => {
  const users = await User.findById(id).populate('chats');
  return users.chats;
}

const createUser = async (body) => {
  const { value, error } = schemas.user.validate(body);
  if (error) return { error };
  const model = new User(value);
  const saved = await model.save();
  return saved;
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

};