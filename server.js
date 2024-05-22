const express = require("express");
const app = express();
const port = 88;

app.use(express.static("../Full-Express_client/dist"));

app.listen(port, () => console.log("Сервер запущен на порту: ", port));
