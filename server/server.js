const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3002;
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.get("/api/v1/sendEmail", (req, res) => {
    console.log(req.body)

    res.send("req.body")
})

app.post("/api/v1/sendEmail", (req, res) => {
    console.log(req.body)
    
    res.status(200).json(req.body)
})

app.listen(port, function () {
    console.log(`Express app running on port ${port}`);
  });
  