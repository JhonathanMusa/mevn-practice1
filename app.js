const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const app = express();
/* const PORT = process.env.PORT || 3000; */

// Middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
//application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


// Rutas
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Middleware para Vue.js router modo history
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

app.set("puerto", process.env.PORT || 3000)
app.listen(app.get("puerto"), () => {
  console.log('Example app listening on port' + app.get("puerto"));
});
