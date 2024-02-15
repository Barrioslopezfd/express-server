const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

const indexOrSlash = "/index.html|^/$";

app.get(indexOrSlash, (req, res) => {
  // res.sendFile("./views/index.html", { root: __dirname });
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/new-page", (req, res) => {
  // res.sendFile("./views/index.html", { root: __dirname });
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
