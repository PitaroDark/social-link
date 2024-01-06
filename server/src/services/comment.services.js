"use strict";
import Comment from "../models/comment.model.js";
import schemas from "../utils/schemas.js";

const getAll = async () => {
  const comments = await Comment.find();
  return comments;
};

const getById = async (id) => {
  const comment = await Comment.findById(id);
  return comment;
};

const getByUserId = async (userId) => {
  const commets = await Comment.find({ userId });
  return commets;
};

const getByPostId = async (postId) => {
  const comments = await Comment.find({ postId });
  return comments;
};

const getByContent = async (content) => {
  const comments = await Comment.find({ content });
  return comments;
};

const createComment = async (body) => {
  const { value, error } = schemas.comment.validate(body);
  if (error) throw error;
  const comment = new Comment(value);
  return await comment.save();
};

const updateComment = async (id, body) => {
  const { value, error } = schemas.commentOptional.validate(body);
  if (error) throw error;
  const comment = Comment.findByIdAndUpdate(id, value);
  return comment;
};

const deleteComment = async (id) => {
  const comment = await Comment.findByIdAndDelete(id);
  return comment;
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