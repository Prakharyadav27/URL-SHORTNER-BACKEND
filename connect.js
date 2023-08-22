const moongose = require("mongoose");

async function ConnectToMongoDB(url) {
  return moongose.connect(url);
}

module.exports = {
  ConnectToMongoDB,
};
