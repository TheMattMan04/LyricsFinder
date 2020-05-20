const LyricSchema = require("../models/LyricSchema");

exports.getHistory = (req, res, next) => {
  const pageSize = +req.query.pagesize;
  const currentPage = +req.query.page;
  const lyricQuery = LyricSchema.find();

  if (pageSize && currentPage) {
    lyricQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
  }

  lyricQuery
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
};

exports.getHistoryById = (req, res, next) => {
  let lyricId = req.params.id;

  LyricSchema.findById(lyricId)
    .then((response) => {
      res.status(200).json({
        status: "Success",
        response: response,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        response: err,
      });
    });
};

exports.deleteHistory = (req, res, next) => {
  LyricSchema.remove()
    .then((response) => {
      res.status(200).json({
        status: "Success",
        removedLyricsCount: response.deletedCount,
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: "Error",
        response: err,
      });
    });
};

exports.deleteHistoryById = (req, res, next) => {
  let lyricId = req.params.id;

  LyricSchema.deleteOne({ _id: lyricId })
    .then((response) => {
      res.status(200).json({
        status: "Success",
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
};
