const express = require('express');
const router = express.Router();

const Post = require('../model/MERCHANT');


router.get('/', async (req, res) => {
    try {
        const post = await Post.find();
        if (!post) throw Error("No items found");

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.get(':/id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) throw Error("No items found");

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const post = await newPost.save();
        if (!post) throw Error("Something went wrong while saving the data");
        
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err });        
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body);
        if (!post) throw Error("No items found to update.");
        
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});

module.exports = router;
