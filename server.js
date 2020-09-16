import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";

// app config
const app = express();
const port = 9000;

// middlewares

// DB Congig

// api endpoints
// GET
app.get("/", (req, res) => res.status(200).send("Hellow coy"));

// GET post
app.get("/v1/posts", (req, res) => res.status(200).send(Data));

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
