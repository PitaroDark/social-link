"use strict";
import { Schema, model } from "mongoose";

const posts = new Schema({
  id_post: {
    type: String,
    minlength: 36,
    maxlength: 36,
    required: true,
    unique: true,
  },
});

export default model("Posts", posts);
