module.exports = (req, res) => {
    if (req.session.userId) {
        req.session.destroy();
        return res.redirect('/')
    } else {
        return res.redirect('/')
    }

}