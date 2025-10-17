const express = require("express"); //express require kia http server ke liye

const app = express();

//  '/' === '/*'    '/' ke baad sab select kr lega
//  /test === /test/*
//  bydefault hm "GET" api call kr rhe on the above route

// install postman

// This will only handle GET method API Call
app.get("/user", (req, res) => {
  res.end("this is the user GET method");
});

app.post("/user", (req, res) => {
  res.end("this is the user POST method");
});

app.delete("/user", (req, res) => {
  res.end("this is the user DELETE method");
});

// this will use all the HTTP method API call to /test
app.use("/test", (req, res) => {
  res.end("this will use all the HTTP method API call to /test");
});

app.use("/", (req, res) => {
  res.send("this is home page");
});

app.listen(3000, () => {
  console.log("this is running on the port 3000");
});
