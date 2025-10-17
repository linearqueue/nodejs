const express = require("express"); //express require kia http server ke liye

const app = express();

app.use("/test", (req, res) => {
  res.send("Running from the test");
});

app.use("/about", (req, res) => {
  res.send("this is about page");
});

app.use("/", (req, res) => {
  res.send("this is home page");
});

app.listen(3000, () => {
  console.log("this is running on the port 3000");
});
