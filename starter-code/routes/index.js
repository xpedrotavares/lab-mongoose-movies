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

// get create

router.get("/celebrities/new", (req, res) =>  res.render("celebrities/new"));

//post create
router.post("/celebrities", (req, res) => {
    console.log(req.body)
    Celebrity.create(req.body)
  .then((result) => {
    console.log(result)
    res.redirect("/celebrities")
  }) .catch ((err) => console.error(err) )
})

// // //get update

// router.get("/celibrities/:id/edit", async(req, res) => {
//   try{
//     const result = await Celebrity.findOne({_id:req.params.id})
//     res.render("celebrities/edit", result)
//   } catch(err) {
//     console.error(err)

//   }
// })

// //post update

// router.post("/celebrities/:id", (req, res) => {
//   Celebrity.updateOne({_id:req.params.id}, {$set:req.body})
//   .then((result) => {
//     console.log(result) 
//     res.redirect("/celebrities")
//   }) .catch((err) => console.error)
// })
//get delete

router.get("/celebrities/:id/delete", async(req, res) => {
  try{
    const result = await Celebrity.findByIdAndRemove({
      _id:req.params.id
    });
    console.log(result);
    res.redirect("/celebrities")
  } catch(err) {
    console.error(err)
  }
})

router.get("/celebrities/:id", async(req, res) => {
  console.log("params =>", req.params)
  try  {
    const result = await Celebrity.findOne({_id:req.params.id})
    res.render("celebrities/show", result)
  } catch (err) {
    console.error(err);
  }
});


// router.post("")


