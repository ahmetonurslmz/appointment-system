module.exports.logoutPage=(req,res) => {
    let url = req.session.reset() ? '/login' : '/'
    res.redirect(url)
}