const express = require("express");
const app = express.json();
const cors = require("cors");
const PORT = process.env.PORT || 8080;

app.listen(8080, () => {
  console.log("Runnig at Port 8080");
});
