const express = require("express");
const app = express();
const translate = require("translate-google-api");

const port = 8000;
async function translateText() {
  const result = await translate(`I'm fine.`, { to: "pt" });
  return result;
}

app.get("/", (req, res) => {
  res.send("Olaaaa");
});

app.get("/translate", (req, res) => {
  translateText().then((t) => {
    res.send({
      Translated: t,
    });
  });
});

app.listen(port, (req, res) => {
  console.log("servidor iniciado");
});
