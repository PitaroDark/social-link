"use strict";
import { Schema, model } from "mongoose";

const user = new Schema({
  id_user:{
    type: String,
    minlength: 36,
    maxlength: 36,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

export default model('User', user);
