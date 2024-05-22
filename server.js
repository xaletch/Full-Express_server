const express = require("express");
const app = express();
const port = 88;

app.use(express.static("dist"));

app.listen(port, () => console.log("Сервер запущен на порту: ", port));
