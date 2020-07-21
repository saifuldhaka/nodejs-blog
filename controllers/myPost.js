const Post = require('../database/models/Post')

module.exports = async (req, res) => {
    var sortData = { createdAt: -1 };
    const posts = await Post.find({ userid: req.session.userId, status: { '$ne': 2} }).sort(sortData);
    res.render('my_post', {
        posts
    })
}