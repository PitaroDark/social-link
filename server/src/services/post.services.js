"use strict";
import Post from "../models/post.model.js";
import schemas from "../utils/schemas.js";

const getAll = async () => {
  const posts = await Post.find();
  return posts;
};

const getById = async (id) => {
  const post = await Post.findById(id);
  return post;
};

const getByUserId = async (userId) => {
  const posts = await Post.find({ userId });
  return posts;
};

const getByContent = async (content) => {
  const posts = await Post.find({ content });
  return posts;
};

const getByTimestamp = async (timestamp) => {
  const posts = await Post.find({ timestamp });
  return posts;
};

const getBySharedPost = async (sharedPost) => {
  const posts = await Post.find({ sharedPost });
  return posts;
};

const getByLikes = async (likes) => {
  const posts = await Post.find({ likes });
  return posts;
};

const getByLoves = async (loves) => {
  const posts = await Post.find({ loves });
  return posts;
};

const getByFunny = async (funny) => {
  const posts = await Post.find({ funny });
  return posts;
};

const getByAngry = async (angry) => {
  const posts = await Post.find({ angry });
  return posts;
};

const getByComments = async (comments) => {
  const posts = await Post.find({ comments });
  return posts;
};

const createPost = async (body) => {
  const { value, error } = schemas.post.validate(body);
  if (error) return { error };
  const model = new Post(value);
  const saved = await model.save();
  return saved;
};

const patchPost = async (id, body) => {
  const { value, error } = schemas.postOptional.validate(body);
  if (error) return { error };
  const model = Post.findByIdAndUpdate(id, value);
  return model;
};

const deletePost = async (id) => {
  const post = await Post.findByIdAndDelete(id);
  return post;
};

export default {
  getAll,
  getById,
  getByUserId,
  getByContent,
  getByTimestamp,
  getBySharedPost,
  getByLikes,
  getByLoves,
  getByFunny,
  getByAngry,
  getByComments,
  createPost,
  patchPost,
  deletePost,
};