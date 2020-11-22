
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Lit fitness' });
});

/* GET about page. */

router.get('/about', function (req, res, next) {
    res.render('about', { message: 'Content from the controller goes here' })
});

/* GET projects page. */

router.get('/projects', function (req, res, next) {
    res.render('projects', { message: 'Content from the controller goes here' })
});


/* GET services page. */

router.get('/services', function (req, res, next) {
    res.render('services', { message: 'Content from the controller goes here' })
});

/* GET contact page. */

router.get('/contact', function (req, res, next) {
    res.render('contact', { message: 'Content from the controller goes here' })
});


module.exports = router;