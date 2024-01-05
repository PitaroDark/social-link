"use strict";
import { Schema, model } from "mongoose";

const postSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
  content: {
    type: String,
  },
  likes: [{ 
    type: Schema.Types.ObjectId, 
    ref: "User" 
  }],
  loves: [{ 
    type: Schema.Types.ObjectId, 
    ref: "User" 
  }],
  funny: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  angry: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  comments: [{ 
    type: Schema.Types.ObjectId, 
    ref: "Comment" 
  }],
});

const Post = model("Post", postSchema);

export default Post;
