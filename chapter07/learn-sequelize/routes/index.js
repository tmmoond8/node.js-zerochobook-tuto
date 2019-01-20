var express = require('express');
var User = require('../models').User;
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const users = await User.findAll();
    res.render('sequelize', { users });
  } catch (error) {
    console.error(error);
    next(error);
  }
  // User.findAll()
  //   .then(users => {
  //     res.render('sequelize', { users });
  //   }).catch(err => {
  //     console.error(err);
  //     next(err);
  //   });
});

module.exports = router;
