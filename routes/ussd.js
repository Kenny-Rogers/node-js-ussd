var express = require("express");
var router = express.Router();
const ussd_router = require("../services/ussd-service");

router.post("/", function(req, res, next) {
  res.json(ussd_router(req.body));
});

module.exports = router;
