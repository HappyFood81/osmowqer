const express = require('express');
const router = express.Router();

const Post = require('../model/CUSTOMER');

// GET:id
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) throw Error("No item found.");

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});


// GET
router.get('/', async (req, res) => {
    try {
        const post = await Post.find();
        if (!post) throw Error("No item found.");

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});



// POST
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const post = await newPost.save();
        if (!post) throw Error("Something went wrong on saving data.");

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});



// UPDATE
router.patch('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body);
        if (!post) throw Error("No item found to update.");

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});



// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) throw Error("No item found to delete.");

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});



module.exports = router;