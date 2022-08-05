const express = require("express");
const { connection } = require("mongoose");
const morgan = require("morgan");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const Routes = require("./routes/router")
app.use(Routes)
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

const ConnectionMongoDB = require("./config/connection");
ConnectionMongoDB()