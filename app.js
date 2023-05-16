const express = require("express");
const { API_VERSION } = require("./constants");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Import routings

const authRoutes = require("./router/auth");
const userRoutes = require("./router/user");
const pokemonRoutes = require("./router/pokemon");

// Configure Body Parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configure static folder
app.use(express.static("uploads"));

// Configure Reader HTTP - CORS
app.use(cors());

// Configure routings
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, pokemonRoutes);

module.exports = app;