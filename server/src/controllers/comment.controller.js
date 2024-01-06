"use strict";
import services from "../services/comment.services.js";

const getAll = async (req, res) => {
  const comments = await services.getAll();
  res.status(200).send({ comments });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const comment = await services.getById(id);
  res.status(200).send({ comment });
};

const getByUserId = async (req, res) => {
  const { userId } = req.params;
  const comments = await services.getByUserId(userId);
  res.status(200).send({ comments });
};

const getByPostId = async (req, res) => {
  const { postId } = req.params;
  const comments = await services.getByPostId(postId);
  res.status(200).send({ comments });
};

const getByContent = async (req, res) => {
  const { content } = req.params;
  const comments = await services.getByContent(content);
  res.status(200).send({ comments });
};

const createComment = async (req, res) => {
  const { body } = req;
  const comment = await services.createComment(body);
  res.status(201).send({ comment });
};

const updateComment = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const comment = await services.updateComment(id, body);
  res.status(200).send({ comment });
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  const comment = await services.deleteComment(id);
  res.status(200).send({ comment });
};

export default {
  getAll,
  getById,
  getByUserId,
  getByPostId,
  getByContent,
  createComment,
  updateComment,
  deleteComment,
};
