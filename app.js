const express = require("express");
const bodyParser = require("body-parser");
const { getDate, getDay } = require("./date");
const date = require(__dirname + "/date.js");

// console.log(date());

const app = express();

let items = ["Buy Food!", "Eats Food", "Pray & Sleep"];
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

const port = 3000;

app.get("/", function (req, res) {
  let day = getDate();

  res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
  let item = req.body.newItem;

  if (req.body.list === "work") {
    workItems.push(item);
    res.redirect("work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
