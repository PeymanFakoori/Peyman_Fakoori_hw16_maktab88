const express = require("express");
const router = express.Router();
const products = require("../models/productModels");
const createError = require("http-errors");

const A = (req, res, next) => {
  products
    .find()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      next(createError(400, err.message));
    });
};

const B = (req, res, next) => {
  products
    .find({}, { _id: 0 })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      next(createError(400, err.message));
    });
};

const C = (req, res, next) => {
  products
    .find({ type: "Audio Album" })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      next(createError(400, err.message));
    });
};

const D = (req, res, next) => {
  products
    .find({ "pricing.retail": { $lt: 5000 } })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      next(createError(400, err.message));
    });
};

const E = (req, res, next) => {
  products
    .find({ type: { $ne: "Film" } })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      next(createError(400, err.message));
    });
};

const F = (req, res, next) => {
  products
    .find({ "shipping.weight": { $gt: 15 } })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      next(createError(400, err.message));
    });
};

const G = (req, res, next) => {
  products
    .findOneAndUpdate(
      { "details.title": "The Matrix" },
      { $set: { "pricing.list": 2500 } }
    )
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      next(createError(400, err.message));
    });
};
const H = (req, res, next) => {
  products
    .find({
      $and: [{ type: "Film" }, { "shipping.dimensions.depth": 1 }],
    })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      next(createError(400, err.message));
    });
};

const I = (req, res, next) => {
  products
    .countDocuments({ type: "Film" })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      next(createError(400, err.message));
    });
};

const J = (req, res, next) => {
  products
    .find({ "details.writer": { $regex: /Jonathan Nolan/ } })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      next(createError(400, err.message));
    });
};

const K = (req, res, next) => {
  products
    .find()
    .sort({ "pricing.savings": -1 })
    .limit(1)
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      next(createError(400, err.message));
    });
};

const L = (req, res, next) => {
  products
    .find({ "details.title": { $regex: /x/ } })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      next(createError(400, err.message));
    });
};

const M = (req, res, next) => {
  products
    .findOneAndDelete({ "details.aspect_ratio": "1.66:1" })
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      next(createError(400, err.message));
    });
};

module.exports = { A, B, C, D, E, F, G, H, I, J, K, L, M };
