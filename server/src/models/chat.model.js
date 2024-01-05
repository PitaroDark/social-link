"use strict";
import { Schema, model } from "mongoose";

const chatSchema = new Schema({
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  messages: [
    {
      senderId: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
      content: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});

const Chat = model("Chat", chatSchema);

export default Chat
