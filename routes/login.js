var express = require('express');
const app = require('../app');
const { request } = require('../app');
var router = express.Router();

let username = "gokul", password = "1234"

/* GET users listing. */
router.get('/', function (req, res, next) {
  if (req.session.loggedIn) {

    res.redirect('/index');
    
  } else {
    if(req.query.error){
      return res.render('login', { message: "Enter valid credentials!", error: true })
    }
    res.render('login');
  }
});

router.post('/index', (req, res) => {
  if (req.body.username == username && req.body.password == password) {

    req.session.loggedIn = true;
    req.session.username = req.body.username;
    res.redirect('/index')
  } else {
    res.redirect('/?error=true')
    
  }
})








module.exports = router;
