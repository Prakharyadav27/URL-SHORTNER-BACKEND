const shortid = require("shortid");
const URL = require("../models/url");
const { json } = require("express");
async function handleGenrateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ err: "URL is req" });
  const shortID = shortid();

  await URL.create({
    shortID: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

module.exports = {
  handleGenrateNewShortUrl,
};
