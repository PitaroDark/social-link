"use strict";
import User from "../models/user.model.js";
import schemas from "../utils/schemas.js";

const signUp = async (body) => {
  const { value, error } = schemas.user.validate(body);
  if(error)
    return error;
  const model = new User(value);
  return model;
};

export default {
  signUp,
};
