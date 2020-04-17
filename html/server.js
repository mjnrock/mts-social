const express = require("express");
const fs = require("fs");
const path = require("path");
const https = require("https");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "/public")));
app.set("trust proxy", true);

app.get("/", function(req, res) {
    res.sendFile("index.html");
});

https.createServer({
    key: fs.readFileSync("localhost.key"),
    cert: fs.readFileSync("localhost.cert"),
}, app)
.listen(port, () => console.log(`Server is listening on port ${ port }`));