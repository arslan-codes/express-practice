const express = require("express");
const app = express();

let numberOfRequestsForUser = {};

// Clear the request count every 1 second
setInterval(() => {
  numberOfRequestsForUser = {};
}, 9000);

// Global middleware for rate limiting
app.use(function (err, req, res, next) {
  const userId = req.headers["user-id"];
  if (!userId) {
    return res.status(400).send("User ID is required");
  }

  if (numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId]++;
    if (numberOfRequestsForUser[userId] > 5) {
      return res.status(429).send("Too Many Requests");
    }
  } else {
    numberOfRequestsForUser[userId] = 1;
  }
  next();
});

app.get("/ride1", function (req, res) {
  res.json({
    msg: "You have ride 1",
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
