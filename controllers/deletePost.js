const Post = require('../database/models/Post')

module.exports = async (req, res) => {

    const result = await Post.deleteOne({ _id: req.params.id });

    res.redirect('/all-post')

}
