const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food", "Eat", "Sleep" ];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get("/", function(req, res)  {
  var today = new Date();
 
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day, newListItems: items });
});

app.post("/", function(req, res) {
  var item = req.body.newItem;

  items.push(item);

  res.redirect("/");
} );

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
