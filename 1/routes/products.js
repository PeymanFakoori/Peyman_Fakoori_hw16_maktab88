const express = require("express");
const Router = express.Router();
const {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
} = require("../controller/productController");

Router.get("/A", A);
Router.get("/B", B);
Router.get("/C", C);
Router.get("/D", D);
Router.get("/E", E);
Router.get("/F", F);
Router.get("/G", G);
Router.get("/H", H);
Router.get("/I", I);
Router.get("/J", J);
Router.get("/K", K);
Router.get("/L", L);
Router.get("/M", M);

module.exports = Router;
