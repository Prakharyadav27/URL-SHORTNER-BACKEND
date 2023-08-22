const express = require("express");
const { handleGenrateNewShortUrl } = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenrateNewShortUrl);

module.exports = router;
