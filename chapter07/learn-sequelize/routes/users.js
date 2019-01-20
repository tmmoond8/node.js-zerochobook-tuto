var express = require('express');
var User = require('../models').User;
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    console.error(err);
    next(err);
  }
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log('user add');
  User.create({
    name: req.body.name,
    age: req.body.age,
    married: req.body.married,
  })
    .then(result => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch(err => {
      console.error(err);
      next(err);
    });
})

module.exports = router;
