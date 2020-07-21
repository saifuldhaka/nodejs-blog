const Comment = require('../database/models/Comment')

module.exports = (req, res) => {
    Comment.create(
    {
        ...req.body
    }, (error, post) => {
            res.redirect("/posts/" + req.body.postid);
        console.log(req.body.postId);
    });
}