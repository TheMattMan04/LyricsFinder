const Lyric = require("../models/Lyric");
const LyricSchema = require("../models/LyricSchema");
const request = require("request");
require("dotenv/config");

exports.getLyrics = (req, result, next) => {
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
};
