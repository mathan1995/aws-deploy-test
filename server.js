const express = require("express");
const app = express();
const port = 8090;

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to delivery pro @ registered port effective !!",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
