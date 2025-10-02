// server.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // allow cross-origin requests (useful while serving index.html from file or other port)

app.get("/sum", (req, res) => {
  const a = parseFloat(req.query.a) || 0;
  const b = parseFloat(req.query.b) || 0;
  res.send((a + b).toString());
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

