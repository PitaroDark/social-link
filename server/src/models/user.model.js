"use strict";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
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
  },
  resetToken: {
    type: String,
  },
  resetTokenExpiration: {
    type: Date,
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post',
  }],
  chats: [{
    type: Schema.Types.ObjectId,
    ref: 'Chat',
  }],
},{
  timestamps: true,
});

const User = model('User', UserSchema);

export default User;
