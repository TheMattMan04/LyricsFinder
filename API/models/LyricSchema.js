const mongoose = require("mongoose");

const lyricSchema = mongoose.Schema({
  title: { type: String },
  author: { type: String },
  lyrics: { type: String },
  thumbnail: { type: String },
  links: { type: String },
  dateTimeSearched: { type: Date }
});

module.exports = mongoose.model("Lyric", lyricSchema);
