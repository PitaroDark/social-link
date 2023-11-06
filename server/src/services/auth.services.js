"use strict";
import User from "../models/user.model.js";
import schemas from "../utils/schemas.js";

const signUp = async (body) => {
  const { value, error } = schemas.user.validate(body);
  if(error)
    return error;
  return value;
};

export default {
  signUp,
};
