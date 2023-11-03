`use strict`;
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connect } from "./database/db.js";

const app = express();
const PORT = process.env.PORT || 3000;

//MIDDLEWARES
app.use(morgan(`dev`));
app.use(cors({ origin: `*`, methods: [`GET`, `POST`, `PUT`, `DELETE`] }));

//ROUTE NOT FOUND
app.use((req, res) => {
  return res.status(404).send({ message: `The route doesn't exist` });
});

//START APPLICATION
app.listen(PORT, async () => {
  await connect();
  console.log(`Social-Link-Backend corriendo en el puerto ${PORT}`)
});