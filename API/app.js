const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const lyricRoutes = require("./routes/lyric");
const historyRoutes = require("./routes/history");

const app = express();
app.use(cors());

mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((e) => {
    console.log("Connection error: " + e);
  });

app.use("/api/lyrics", lyricRoutes);
app.use("/api/lyrics", historyRoutes);

module.exports = app;
