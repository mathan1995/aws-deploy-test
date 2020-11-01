const express = require("express");
const app = express();
const port = 8090;

app.get("/", (req, res) => {
  res.send({ message: "Hello application runnin sucessfully !!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
