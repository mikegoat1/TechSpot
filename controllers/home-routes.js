const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');



//Get all the info from post when homepage is loaded. 
router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll();
        const posts = postData.map((post) => {
            post.get({ plain: true })
        });

        res.render("homepage", {
            posts,
            loggedIn: req.session.loggedIN,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/signUp', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('signUp');
});






















module.exports = router;