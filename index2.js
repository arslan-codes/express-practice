const express = require("express");
const app = express();

app.get("/add", function (req, res) {
  res.send("hello");
});
app.listen(3000);
