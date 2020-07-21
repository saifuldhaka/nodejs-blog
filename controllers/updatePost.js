const path = require('path')
const Post = require('../database/models/Post')


module.exports = (req, res) => {

    var _id = req.params.id;

    if ((req.files && req.files.image)) {
        const {
            image
        } = req.files;
        
        image.mv(path.resolve(__dirname, '..', 'public/posts', image.name), (error) => {
            const updates = {
                title: req.body.title,
                description: req.body.description,
                content: req.body.content,
                image: `/posts/${image.name}`
            };

            Post.findByIdAndUpdate(_id, updates, { new: true })
                .exec()
                .then(result => res.redirect("/my-post"))
                .catch(err => res.send('Error'));
        })
    } else {
        const updates = {
            title: req.body.title,
            description: req.body.description,
            content: req.body.content
        };

        Post.findByIdAndUpdate(_id, updates, { new: true })
            .exec()
            .then(result => res.redirect("/my-post"))
            .catch(err => res.send('Error'));
    }
    
}