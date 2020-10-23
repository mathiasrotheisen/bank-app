const express = require('express');
const router = express.Router();
const Post = require('../models/User');

//Endpoint for all users
router.get('/', async (req, res) => {
    try {
        const data = await Post.find();
    } catch (err) {
        console.log({message: err})
    };
});

//Endpoint for adding user
router.post('/', async (req, res) => {
    const user = new Post({
        name: req.body.name,
        balance: req.body.balance
    });

    res.json(user);
});

//Endpoint for specific user balance
router.get('/:userId', async (req, res) => {
    try {
        const user = await Post.findById(req.params.userId);
        res.json(user.balance);
    } catch {
        console.log({message: err});
    };
});


module.exports = router;