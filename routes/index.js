var express = require("express");
var router = express.Router();

let producto = [
  { id:0, text:"Primer Producto", precio: 5000},
  { id:1, text:"Segundo Producto", precio: 5000}
];

/* GET home page. */
router.get("/data", function(req, res) {
  res.json(producto);
});

/* POST home page */
router.post("/addData", function(req,res){
  res.json(req.body.id);
});

module.exports = router;
