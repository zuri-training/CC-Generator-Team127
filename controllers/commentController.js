const Comment = require('../model/comment');

const comment_index = (req, res) => {
  Comment.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      //   res.render('index', { blogs: result, title: 'All blogs' });
      res.render('commentpage', { comments: result });
    })
    .catch((err) => {
      console.log(err);
    });
  // res.send('group');
};

// const blog_details = (req, res) => {
//   const id = req.params.id;
//   Comment.findById(id)
//     .then((result) => {
//       //   res.render('details', { blog: result, title: 'Blog Details' });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.render('404', { title: 'Blog not found' });
//     });
// };

// const comment_create_get = (req, res) => {
//   res.render('about');
//   //   res.render('create', { title: 'Create a new blog' });
//   // res.redirect('/');
// };

const about = (req, res) => {
  res.status(200).render('about');
};

const comment_create_post = (req, res) => {
  const comment = new Comment(req.body);
  comment
    .save()
    .then((result) => {
      // res.send(result);
      res.redirect('/commentpage');
      // res.redirect('/dowloadpage', { comments: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const index = (req, res) => {
  res.status(200).render('library');
};

const comment_delete = (req, res) => {
  const id = req.params.id;
  Comment.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/' });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  index,
  about,
  comment_index,
  comment_create_post,
  comment_delete,
};
