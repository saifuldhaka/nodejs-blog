const Comment = require('../database/models/Comment')

module.exports = (req, res) => {

    var _id = req.body.id;

    const updates = {
        status: req.body.status
    };

    Comment.findByIdAndUpdate(_id, updates, { new: true })
        .exec()
        .then(result => res.json({ status: 1 }))
        .catch(err => res.json({ status: 0 }));

}

