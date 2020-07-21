const Post = require('../database/models/Post')
const Comment = require('../database/models/Comment')


module.exports = async (req, res) => {
    const post = await Post.findById(req.params.id);

    var sortData = {createdAt : -1 };
    const comments = await Comment.find({ postid: req.params.id, status: { '$ne': 2 } }).sort(sortData);

    var sortData = { createdAt: -1 };
    var recentPosts = '';
    
    if (req.session.userId) {
        recentPosts = await Post.find({ _id: { '$ne': req.params.id }, status: 1, userid: req.session.userId }).sort(sortData).limit(10);

    } else {
        recentPosts = await Post.find({ _id: { '$ne': req.params.id }, status: 1 }).sort(sortData).limit(10);
    }

    res.render("post", {
        post,
        comments,
        recentPosts
    });
}

