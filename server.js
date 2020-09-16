import express from "express";
import mongoose from "mongoose";

// app config
const app = express();
const port = 9000;

// middlewares

// DB Congig

// api endpoints
app.get("/", (req, res) => res.status(200).send("Hellow coy"));

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
