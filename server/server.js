const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(cors());

const catchErr = (err) => console.log(err);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/styles.css"));
});

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.js"));
});

app.get("/rkillerperks", (req, res) => {
  axios
    .get("https://dbd-api.herokuapp.com/perks/?role=Killer")
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch(catchErr);
});

app.get("/rkiller", (req, res) => {
  axios
    .get("https://dbd-api.herokuapp.com/killers")
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch(catchErr);
});

app.get("/rsurvivorperks", (req, res) => {
  axios
    .get("https://dbd-api.herokuapp.com/perks/?role=Survivor")
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch(catchErr);
});
const port = 4000;

app.listen(port, console.log(`Listening on port ${port}`));
