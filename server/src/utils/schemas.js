"use strict";
import Joi from "joi";

const user = Joi.object({
  username: Joi.string().required(),
  name: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export default {
  user
};
