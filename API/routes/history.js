const express = require("express");

const HistoryController = require("../controllers/history");

const router = express.Router();

router.get("/history", HistoryController.getHistory);
router.get("/history/:id", HistoryController.getHistoryById);
router.delete("/history", HistoryController.deleteHistory);
router.delete("/history/:id", HistoryController.deleteHistoryById);

module.exports = router;
