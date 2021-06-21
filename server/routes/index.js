// routes/index.js
const express = require("express");
const router = express.Router();
const Post = require("../models/post");

// Add a new post
router.route("/create-post").post( async (req, res) => {
  try{
    const body = req.body
    const newPost = new Post({
      ...body
    });
    const savedPost = await newPost.save();
    res.status(200).json({msg: "Post saved successfully", savedPost});
  } catch(err){
    console.log(err);
    res.status(500).json({err});
  }
});

//Get all Posts
router.route("/posts").get( async (req, res) => {
  try{
    const posts = await Post.find();
    res.status(200).json({msg: "Posts fetched successfully", posts});
  } catch(err){
    console.log(err);
    res.status(500).json({err});
  }
});

//Get a Post by ID
//sample API: /posts/60d087b4b2dbf9a474758b2a
router.route("/posts/:id").get( async (req, res) => {
  try{
    const postId = req.params.id;
    const post = await Post.findOne({_id: postId});
    res.status(200).json({msg: "Posts fetched successfully", post});
  } catch(err){
    console.log(err);
    res.status(500).json({err});
  }
});

//Update a post by ID
router.route("/update-post").post( async (req, res) => {
  try{
    //pass complete upated object in body
    await Post.updateOne({_id: req.body._id},{
      ...req.body
    });
    res.status(200).json({msg: "Post updated successfully"});
  } catch(err){
    console.log(err);
    res.status(500).json({err});
  }
});

//delete a post by ID
router.route("/delete-post").delete( async (req, res) => {
  try{
    //only pass _id in the body
    await Post.deleteOne({_id: req.body._id});
    res.status(200).json({msg: "Post deleted successfully"});
  } catch(err){
    console.log(err);
    res.status(500).json({err});
  }
});

// router.get('/articles', function(req, res) {
//   Article.find(function(err, articles) {
//     res.json(articles);
//   });
// });

// router.get('/articles/:id', function(req, res) {
//   Article.findById(req.params.id, function(err, article) {
//     if (!article) {
//       res.status(404).send('No result found');
//     } else {
//       res.json(article);
//     }
//   });
// });

// router.post('/articles', function(req, res) {
//   let article = new Article(req.body);
//   article.save()
//     .then(article => {
//       res.send(article);
//     })
//     .catch(function(err) {
//       res.status(422).send('Article add failed');
//     });
// });

// router.patch('/articles/:id', function(req, res){
//   Article.findByIdAndUpdate(req.params.id, req.body)
//     .then(function() {
//       res.json('Article updated');
//     })
//     .catch(function(err) {
//       res.status(422).send("Article update failed.");
//     });
// });

// router.delete('/articles/:id', function(req, res) {
//   Article.findById(req.params.id, function(err, article) {
//     if (!article) {
//       res.status(404).send('Article not found');
//     } else {
//       Article.findByIdAndRemove(req.params.id)
//         .then(function() { res.status(200).json("Article deleted") })
//         .catch(function(err) {
//           res.status(400).send("Article delete failed.");
//         })
//     }
//   });
// })

module.exports = router;
