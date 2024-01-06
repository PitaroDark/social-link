"use strict";
import services from "../services/post.services.js";

const getAll = async (req, res) => {
  const posts = await services.getAll();
  res.status(200).send({ posts });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const post = await services.getById(id);
  res.status(200).send({ post });
};

const getByUserId = async (req, res) => {
  const { userId } = req.params;
  const posts = await services.getByUserId(userId);
  res.status(200).send({ posts });
};

const getByContent = async (req, res) => {
  const { content } = req.params;
  const posts = await services.getByContent(content);
  res.status(200).send({ posts });
};

const getByTimestamp = async (req, res) => {
  const { timestamp } = req.params;
  const posts = await services.getByTimestamp(timestamp);
  res.status(200).send({ posts });
};

const getBySharedPost = async (req, res) => {
  const { sharedPost } = req.params;
  const posts = await services.getBySharedPost(sharedPost);
  res.status(200).send({ posts });
};

const getByLikes = async (req, res) => {
  const { likes } = req.params;
  const posts = await services.getByLikes(likes);
  res.status(200).send({ posts });
};

const getByLoves = async (req, res) => {
  const { loves } = req.params;
  const posts = await services.getByLoves(loves);
  res.status(200).send({ posts });
};

const getByFunny = async (req, res) => {
  const { funny } = req.params;
  const posts = await services.getByFunny(funny);
  res.status(200).send({ posts });
};

const getByAngry = async (req, res) => {
  const { angry } = req.params;
  const posts = await services.getByAngry(angry);
  res.status(200).send({ posts });
};

const getByComments = async (req, res) => {
  const { comments } = req.params;
  const posts = await services.getByComments(comments);
  res.status(200).send({ posts });
};

const createPost = async (req, res) => {
  const post = await services.createPost(req?.body);
  res.status(201).send({ post });
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = await services.updatePost(id, req?.body);
  res.status(200).send({ post });
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await services.deletePost(id);
  res.status(200).send({ post });
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
  updatePost,
  deletePost,
};
