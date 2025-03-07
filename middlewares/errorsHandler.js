function errorsHandler(err, req, res, next) {
    res.status(500)
    res.json({
        error: "not defined",
    });
};
module.exports = errorsHandler;