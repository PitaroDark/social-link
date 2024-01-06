"use strict";
import Joi from "joi";

const user = Joi.object({
  username: Joi.string().lowercase().regex(/^[a-z0-9_.]+$/)
    .message('Only accept letters, numbers, points or underscores').required(),
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  friends: Joi.array().items(Joi.string()),
  posts: Joi.array().items(Joi.string()),
  chats: Joi.array().items(Joi.string()),
});

const userOptional = Joi.alternatives().try(
  Joi.required().optional(),
  user
);

const post = Joi.object({
  userId: Joi.string().required(),
  text: Joi.string(),
  sharedPost: Joi.string(),
  likes: Joi.array().items(Joi.string()),
  loves: Joi.array().items(Joi.string()),
  funny: Joi.array().items(Joi.string()),
  angry: Joi.array().items(Joi.string()),
  comments: Joi.array().items(Joi.string()),
});

const postOptional = Joi.alternatives().try(
  Joi.required().optional(),
  post
)

const comment = Joi.object({
  userId: Joi.string().required(),
  postId: Joi.string().required(),
  text: Joi.string().required(),
});

const commentOptional = Joi.alternatives().try(
  Joi.required().optional(),
  comment
);

const resetPassword = Joi.object({
  email: Joi.string().email().required(),
});

export default {
  user,
  userOptional,
  post,
  postOptional,
  comment,
  commentOptional,
  resetPassword,
};
