const express = require("express");
const urlRoute = require("./routes/url");
const { ConnectToMongoDB } = require("./connect");

const app = express();
const PORT = 8080;
ConnectToMongoDB("mongodb://127.0.0.1:27017/shortUrl").then(() => {
  console.log("MongoDB Connection Succses");
});
app.use(express.json());
app.use("/url", urlRoute);

app.listen(PORT, () => {
  `Server Started at Port: ${PORT}`;
});
