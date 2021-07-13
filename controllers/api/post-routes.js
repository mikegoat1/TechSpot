const router = require('express').Router();
const { Post } = require('../../models');

router.post("/", async (req, res) => {
    try {
        const dbPostData = await Post.create({
            title: req.body.title,
            description: req.body.content,
            date: Date.now(),
        });
        //create req.sessions id with post
        // include other models
        
        res.status(200).json(dbPostData); 
    } catch (err) {
        console.log(err)
        res.status(500).json(err); 
    }
})




module.exports = router; 
