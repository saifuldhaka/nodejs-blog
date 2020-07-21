const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    postid: String,
    username: String,
    email: String,
    message: String,
    status: Number,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;