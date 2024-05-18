const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3002;

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(port, function () {
    console.log(`Express app running on port ${port}`);
  });
  