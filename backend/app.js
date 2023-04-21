const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "backend/config/.env",
  });
}

// routers
const adminRoute = require("./controllers/admin");
const clientRoute = require("./controllers/client");
const commercialRoute = require("./controllers/commercial");
const productRoute = require("./controllers/product");
app.use("/admin", adminRoute);
app.use("/client", clientRoute);
app.use("/commercial", commercialRoute);
app.use("/product", productRoute);

// Error
app.use(ErrorHandler);
module.exports = app;
