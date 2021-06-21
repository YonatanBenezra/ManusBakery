// routes/index.js
const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.route("/create").post((req, res) => {
  console.log(req)
  const body = req.body
  const image = req.body.image;
  const recipeName = req.body.recipeName;
  const paragraph1 = req.body.paragraph1;
  const paragraph2 = req.body.paragraph2;
  const paragraph3 = req.body.paragraph3;
  const paragraph4 = req.body.paragraph4;
  const firstNote = req.body.firstNote;
  const firstIngredientTitle = req.body.firstIngredientTitle;
  const firstIngredient1 = req.body.firstIngredient1;
  const firstIngredient2 = req.body.firstIngredient2;
  const firstIngredient3 = req.body.firstIngredient3;
  const firstIngredient4 = req.body.firstIngredient4;
  const firstIngredient5 = req.body.firstIngredient5;
  const firstIngredient6 = req.body.firstIngredient6;
  const firstIngredient7 = req.body.firstIngredient7;
  const firstIngredient8 = req.body.firstIngredient8;
  const firstIngredient9 = req.body.firstIngredient9;
  const firstIngredient10 = req.body.firstIngredient10;
  const firstIngredient11 = req.body.firstIngredient11;
  const firstIngredient12 = req.body.firstIngredient12;
  const firstIngredient13 = req.body.firstIngredient13;
  const firstIngredient14 = req.body.firstIngredient14;
  const firstIngredient15 = req.body.firstIngredient15;
  const firstIngredient16 = req.body.firstIngredient16;
  const firstIngredient17 = req.body.firstIngredient17;
  const firstIngredient18 = req.body.firstIngredient18;
  const firstIngredient19 = req.body.firstIngredient19;
  const firstIngredient20 = req.body.firstIngredient20;
  const firstIngredient21 = req.body.firstIngredient21;
  const firstIngredient22 = req.body.firstIngredient22;
  const firstIngredient23 = req.body.firstIngredient23;
  const firstIngredient24 = req.body.firstIngredient24;
  const firstIngredient25 = req.body.firstIngredient25;
  const secondIngredientTitle = req.body.secondIngredientTitle;
  const secondIngredient1 = req.body.secondIngredient1;
  const secondIngredient2 = req.body.secondIngredient2;
  const secondIngredient3 = req.body.secondIngredient3;
  const secondIngredient4 = req.body.secondIngredient4;
  const secondIngredient5 = req.body.secondIngredient5;
  const secondIngredient6 = req.body.secondIngredient6;
  const secondIngredient7 = req.body.secondIngredient7;
  const secondIngredient8 = req.body.secondIngredient8;
  const secondIngredient9 = req.body.secondIngredient9;
  const secondIngredient10 = req.body.secondIngredient10;
  const secondIngredient11 = req.body.secondIngredient11;
  const secondIngredient12 = req.body.secondIngredient12;
  const secondIngredient13 = req.body.secondIngredient13;
  const secondIngredient14 = req.body.secondIngredient14;
  const secondIngredient15 = req.body.secondIngredient15;
  const secondIngredient16 = req.body.secondIngredient16;
  const secondIngredient17 = req.body.secondIngredient17;
  const secondIngredient18 = req.body.secondIngredient18;
  const secondIngredient19 = req.body.secondIngredient19;
  const secondIngredient20 = req.body.secondIngredient20;
  const secondIngredient21 = req.body.secondIngredient21;
  const secondIngredient22 = req.body.secondIngredient22;
  const secondIngredient23 = req.body.secondIngredient23;
  const secondIngredient24 = req.body.secondIngredient24;
  const secondIngredient25 = req.body.secondIngredient25;
  const thirdIngredientTitle = req.body.thirdIngredientTitle;
  const thirdIngredient1 = req.body.thirdIngredient1;
  const thirdIngredient2 = req.body.thirdIngredient2;
  const thirdIngredient3 = req.body.thirdIngredient3;
  const thirdIngredient4 = req.body.thirdIngredient4;
  const thirdIngredient5 = req.body.thirdIngredient5;
  const thirdIngredient6 = req.body.thirdIngredient6;
  const thirdIngredient7 = req.body.thirdIngredient7;
  const thirdIngredient8 = req.body.thirdIngredient8;
  const thirdIngredient9 = req.body.thirdIngredient9;
  const thirdIngredient10 = req.body.thirdIngredient10;
  const thirdIngredient11 = req.body.thirdIngredient11;
  const thirdIngredient12 = req.body.thirdIngredient12;
  const thirdIngredient13 = req.body.thirdIngredient13;
  const thirdIngredient14 = req.body.thirdIngredient14;
  const thirdIngredient15 = req.body.thirdIngredient15;
  const thirdIngredient16 = req.body.thirdIngredient16;
  const thirdIngredient17 = req.body.thirdIngredient17;
  const thirdIngredient18 = req.body.thirdIngredient18;
  const thirdIngredient19 = req.body.thirdIngredient19;
  const thirdIngredient20 = req.body.thirdIngredient20;
  const thirdIngredient21 = req.body.thirdIngredient21;
  const thirdIngredient22 = req.body.thirdIngredient22;
  const thirdIngredient23 = req.body.thirdIngredient23;
  const thirdIngredient24 = req.body.thirdIngredient24;
  const thirdIngredient25 = req.body.thirdIngredient25;
  const secondNote = req.body.secondNote;
  const step1Title = req.body.step1Title;
  const step1Content = req.body.step1Content;
  const step2Title = req.body.step2Title;
  const step2Content = req.body.step2Content;
  const step3Title = req.body.step3Title;
  const step3Content = req.body.step3Content;
  const step4Title = req.body.step4Title;
  const step4Content = req.body.step4Content;
  const step5Title = req.body.step5Title;
  const step5Content = req.body.step5Content;
  const step6Title = req.body.step6Title;
  const step6Content = req.body.step6Content;
  const step7Title = req.body.step7Title;
  const step7Content = req.body.step7Content;
  const step8Title = req.body.step8Title;
  const step8Content = req.body.step8Content;
  const step9Title = req.body.step9Title;
  const step9Content = req.body.step9Content;
  const step10Title = req.body.step10Title;
  const step10Content = req.body.step10Content;
  const step11Title = req.body.step11Title;
  const step11Content = req.body.step11Content;
  const step12Title = req.body.step12Title;
  const step12Content = req.body.step12Content;
  const step13Title = req.body.step13Title;
  const step13Content = req.body.step13Content;
  const step14Title = req.body.step14Title;
  const step14Content = req.body.step14Content;
  const step15Title = req.body.step15Title;
  const step15Content = req.body.step15Content;
  const step16Title = req.body.step16Title;
  const step16Content = req.body.step16Content;
  const step17Title = req.body.step17Title;
  const step17Content = req.body.step17Content;
  const step18Title = req.body.step18Title;
  const step18Content = req.body.step18Content;
  const step19Title = req.body.step19Title;
  const step19Content = req.body.step19Content;
  const step20Title = req.body.step20Title;
  const step20Content = req.body.step20Content;
  const step21Title = req.body.step21Title;
  const step21Content = req.body.step21Content;
  const step22Title = req.body.step22Title;
  const step22Content = req.body.step22Content;
  const step23Title = req.body.step23Title;
  const step23Content = req.body.step23Content;
  const step24Title = req.body.step24Title;
  const step24Content = req.body.step24Content;
  const step25Title = req.body.step25Title;
  const step25Content = req.body.step25Content;
  const ThirdNote = req.body.ThirdNote;
  const newPost = new Post({
    body
    // image,
    // recipeName,
    // paragraph1,
    // paragraph2,
    // paragraph3,
    // paragraph4,
    // firstNote,
    // firstIngredientTitle,
    // firstIngredient1,
    // firstIngredient2,
    // firstIngredient3,
    // firstIngredient4,
    // firstIngredient5,
    // firstIngredient6,
    // firstIngredient7,
    // firstIngredient8,
    // firstIngredient9,
    // firstIngredient10,
    // firstIngredient11,
    // firstIngredient12,
    // firstIngredient13,
    // firstIngredient14,
    // firstIngredient15,
    // firstIngredient16,
    // firstIngredient17,
    // firstIngredient18,
    // firstIngredient19,
    // firstIngredient20,
    // firstIngredient21,
    // firstIngredient22,
    // firstIngredient23,
    // firstIngredient24,
    // firstIngredient25,
    // secondIngredientTitle,
    // secondIngredient1,
    // secondIngredient2,
    // secondIngredient3,
    // secondIngredient4,
    // secondIngredient5,
    // secondIngredient6,
    // secondIngredient7,
    // secondIngredient8,
    // secondIngredient9,
    // secondIngredient10,
    // secondIngredient11,
    // secondIngredient12,
    // secondIngredient13,
    // secondIngredient14,
    // secondIngredient15,
    // secondIngredient16,
    // secondIngredient17,
    // secondIngredient18,
    // secondIngredient19,
    // secondIngredient20,
    // secondIngredient21,
    // secondIngredient22,
    // secondIngredient23,
    // secondIngredient24,
    // secondIngredient25,
    // thirdIngredientTitle,
    // thirdIngredient1,
    // thirdIngredient2,
    // thirdIngredient3,
    // thirdIngredient4,
    // thirdIngredient5,
    // thirdIngredient6,
    // thirdIngredient7,
    // thirdIngredient8,
    // thirdIngredient9,
    // thirdIngredient10,
    // thirdIngredient11,
    // thirdIngredient12,
    // thirdIngredient13,
    // thirdIngredient14,
    // thirdIngredient15,
    // thirdIngredient16,
    // thirdIngredient17,
    // thirdIngredient18,
    // thirdIngredient19,
    // thirdIngredient20,
    // thirdIngredient21,
    // thirdIngredient22,
    // thirdIngredient23,
    // thirdIngredient24,
    // thirdIngredient25,
    // secondNote,
    // step1Title,
    // step1Content,
    // step2Title,
    // step2Content,
    // step3Title,
    // step3Content,
    // step4Title,
    // step4Content,
    // step5Title,
    // step5Content,
    // step6Title,
    // step6Content,
    // step7Title,
    // step7Content,
    // step8Title,
    // step8Content,
    // step9Title,
    // step9Content,
    // step10Title,
    // step10Content,
    // step11Title,
    // step11Content,
    // step12Title,
    // step12Content,
    // step13Title,
    // step13Content,
    // step14Title,
    // step14Content,
    // step15Title,
    // step15Content,
    // step16Title,
    // step16Content,
    // step17Title,
    // step17Content,
    // step18Title,
    // step18Content,
    // step19Title,
    // step19Content,
    // step20Title,
    // step20Content,
    // step21Title,
    // step21Content,
    // step22Title,
    // step22Content,
    // step23Title,
    // step23Content,
    // step24Title,
    // step24Content,
    // step25Title,
    // step25Content,
    // ThirdNote
  });
  console.log(req.body)
  // newPost.save();
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
