const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    message: { type: String },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
