const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const connection = require("./config/db");
const app = express();

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
    console.log(`Runnig at Port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
