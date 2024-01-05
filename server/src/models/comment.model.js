"use strict";
import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: 'User' 
  },
  postId: { 
    type: Schema.Types.ObjectId,
     ref: 'Post'
  },
  content: String,
});

const Comment = model("Comment", commentSchema);

export default Comment;
