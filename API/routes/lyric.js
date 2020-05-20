const express = require("express");

const LyricController = require("../controllers/lyric");

const router = express.Router();

router.get("", LyricController.getLyrics);

module.exports = router;
