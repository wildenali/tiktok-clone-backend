import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./dbModel.js";

// const express = require("express");
// const mongoose = require("mongoose");
// const Data = require("./data.js");
// const Videos = require("./dbModel.js");

// app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

// DB Config
const connection_url =
  "mongodb+srv://admin:lFAYiX3ykiGi6TDd@cluster0.fiukr.mongodb.net/tiktok-clone?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  userNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// api endpoints
// GET
app.get("/", (req, res) => res.status(200).send("Hellow coy"));

// GET post
app.get("/v1/posts", (req, res) => res.status(200).send(Data));

// GET data from mongodb cloud database
app.get("/v2/posts", (req, res) => {
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// POST
app.post("/v2/posts", (req, res) => {
  // POST request is to ADD DATA to the database
  // It will let us ADD a video DOCUMENT to the videos COLLECTION
  const dbVideos = req.body;

  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`));
