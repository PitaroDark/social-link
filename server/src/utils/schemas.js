"use strict";
import Joi from "joi";

const user = Joi.object({
  username: Joi.string().lowercase().regex(/^[a-z0-9_.]+$/)
    .message('Only accept letters, numbers, points or underscores').required(),
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const userOptional = Joi.alternatives().try(
  Joi.required().optional(),
  user
);

export default {
  user,
  userOptional,
};
