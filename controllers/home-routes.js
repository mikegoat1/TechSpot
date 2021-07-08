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
            loggedIn: req.session.loggedIn,
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// /login route 

// Home get route for login 
router.get('/login', (req, res) => {
    // if loggedIn is true redirect to home
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    //If not true go to /login 
    res.render('login');
});


// /signUp route 

// home get route for signUp 
router.get('/signUp', (req, res) => {
    // if loggedIn is true redirect to home
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    // if not true go to /signUp 
    res.render('signUp');
});






















module.exports = router;