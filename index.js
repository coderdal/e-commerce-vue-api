const express = require("express");

const server = express();

const cors = require("cors");

const data = require("./data.js");

server.use(
  cors({
    origin: "http://localhost:8080",
  })
);

/* EndPoints */

server.get("/", (req, res) => {
  res.status(200).send("<h1>REST API with Node JS by @coderdal</h1>");
});

/* Whole Products Endpoint */
server.get("/products", (req, res) => {
  data
    ? res.status(200).json(data)
    : res.status(404).json({ code: 404, message: "Not Found" });
});

/* Single Product Endpoint */
server.get("/product/:id", (req, res) => {
  data.find((product) => product.id == req.params.id)
    ? res.status(200).json(data.find((product) => product.id == req.params.id))
    : res.status(404).json({ code: 404, message: "Not Found" });
});

/* CATEGORIES */

/* Equipments Endpoint */
server.get("/products/equipments", (req, res) => {
  data.filter((product) => product.category === "equipments")
    ? res
        .status(200)
        .json(data.filter((product) => product.category === "equipments"))
    : res.status(404).json({ code: 404, message: "Not Found" });
});

/* Computer Endpoint */
server.get("/products/computer", (req, res) => {
  data.filter((product) => product.category === "computer")
    ? res
        .status(200)
        .json(data.filter((product) => product.category === "computer"))
    : res.status(404).json({ code: 404, message: "Not Found" });
});

/* Graphic-Card Endpoint */
server.get("/products/graphic-cards", (req, res) => {
  data.filter((product) => product.category === "graphic-cards")
    ? res
        .status(200)
        .json(data.filter((product) => product.category === "graphic-cards"))
    : res.status(404).json({ code: 404, message: "Not Found" });
});

/* Displays Endpoint */
server.get("/products/displays", (req, res) => {
  data.filter((product) => product.category === "displays")
    ? res
        .status(200)
        .json(data.filter((product) => product.category === "displays"))
    : res.status(404).json({ code: 404, message: "Not Found" });
});

server.listen(process.env.PORT || 3001, () => {
  console.log("Server is running");
});
