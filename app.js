const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  var today = new Date();
  var currentDay = today.getDate();
  if (currentDay === 5 || currentDay === 0) {
    res.send("its friday");
  } else {
    
    res.sendFile(__dirname + "/index.html")
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
