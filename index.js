const express = require("express");
const app = express();

app.get("/", (_, res) => {
  res.json({ ok: true, message: "Hello World" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("server started at port: " + port));
