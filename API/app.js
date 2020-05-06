const express = require("express");
const cors = require("cors");
const request = require("request");
const mongoose = require("mongoose");
require("dotenv/config");

const Lyric = require("./models/Lyric");
const LyricSchema = require("./models/LyricSchema");

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

app.get("/api/lyrics", (req, result, next) => {
  let title = req.query.title;
  let lyric = new Lyric();

  request(process.env.API_CONNECTION + title + "", function (err, res, body) {
    if (!err) {
      let parseBody = JSON.parse(body);

      lyric.title = parseBody.title;
      lyric.author = parseBody.author;
      lyric.lyrics = parseBody.lyrics;
      lyric.thumbnail = parseBody.thumbnail;
      lyric.links = parseBody.links;

      const lyricSchema = new LyricSchema({
        title: lyric.title,
        author: lyric.author,
        lyrics: lyric.lyrics,
        thumbnail: lyric.thumbnail.genius,
        links: lyric.links.genius,
        dateTimeSearched: Date.now(),
      });

      lyricSchema
        .save()
        .then((savedHistory) => {
          console.log("Lyric saved to history: ");
        })
        .catch((e) => {
          console.log("Error: " + e);
        });
      result.status(200).send(lyric);
    } else {
      result.status(500).json({
        message: "Error",
        result: err,
      });
    }
  });
});

app.get("/api/lyrics/history", (req, res, next) => {
  LyricSchema.find()
    .then((returnedLyrics) => {
      res.status(200).json({
        status: "Success",
        searchHistory: returnedLyrics,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        response: err,
      });
    });
});

app.get("/api/lyrics/history/:id", (req, res, next) => {
  let lyricId = req.params.id;

  LyricSchema.findById(lyricId)
    .then((response) => {
      res.status(200).json({
        status: "Success",
        response: response
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        response: err,
      });
    });
});

app.delete("/api/lyrics/history", (req, res, next) => {
  LyricSchema.remove()
    .then((response) => {
      res.status(200).json({
        status: "Lyrics removed",
        removedLyricsCount: response.deletedCount,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        response: err,
      });
    });
});

app.delete("/api/lyrics/history/:id", (req, res, next) => {
  let lyricId = req.params.id;

  LyricSchema.deleteOne({ _id: lyricId })
    .then((response) => {
      res.status(200).json({
        status: "Lyric removed",
        removedLyricsCount: response.deletedCount,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        response: {
          reason: "Lyric not found",
          error: err,
        },
      });
    });
});

module.exports = app;
