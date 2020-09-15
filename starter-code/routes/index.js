const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity.model")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;

//get celebrities list
router.get("/celebrities", async(req, res)=> {
  try {
    const result = await Celebrity.find();

    res.render("celebrities", { celebrities: result });
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
});
