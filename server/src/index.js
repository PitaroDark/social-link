`use strict`;
import express from "express";
import cors from "cors";
import morgan from "morgan";
import acceptFiles from "express-fileupload";
import parseCookies from "cookie-parser";
import http from "http";
import { Server as sockerServer } from "socket.io";
import { connect } from "./database/db.js";
import auth from "./routes/auth.routes.js";
import user from "./routes/user.routes.js";
import post from "./routes/post.routes.js";
import comment from "./routes/comment.routes.js";
import chat from "./routes/chat.routes.js";
import env from "./config/config.js";

const app = express();
const server = http.createServer(app);
const io = new sockerServer(server, {
  core: {
    origins: "*",
  },
});
const PORT = env.PORT || 3000;

//MIDDLEWARES
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan(`dev`));
app.use(cors({ origin: `*`, methods: [`GET`, `POST`, `PUT`, `DELETE`] }));
app.use(parseCookies());
app.use(acceptFiles());

//ROUTES
app.use("/auth", auth);
app.use("/user", user);
app.use("/post", post);
app.use("/comment", comment);
app.use("/chat", chat);
app.use((req, res) => {
  //NOT FOUND
  return res.status(404).send({ message: `The route doesn't exist` });
});

//START APPLICATION
app.listen(PORT, async () => {
  await connect();
  console.log(`Social-Link-Backend in http://localhost:${PORT}`);
});
