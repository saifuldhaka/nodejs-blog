const Post = require('../database/models/Post')

module.exports = async (req, res) => {
    var sortData = { createdAt: -1 };
    const posts = await Post.find({status: { '$ne': 0 }}).sort(sortData);
    res.render('all_post', {
        posts
    })
}