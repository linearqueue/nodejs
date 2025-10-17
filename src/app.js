const express = require("express");

const app = express();

app.use((req, res) => {
  res.send("hi this is shubham");
});

app.listen(7777, () => {
  console.log("this is running on the port 7777");
});
