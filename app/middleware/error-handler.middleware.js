module.exports.notFound = function notFound(req, res) {
    res.status(404).json({
        code: 404,
        message: "No resource present at this time",
    });
};


module.exports.badRequest = function badRequest(err, req, res, next) {
    if (err.code && typeof err.code === "number") {
        console.log(`status - ${err.code}, message - ${err.message}, url - ${req.originalUrl}, method - ${req.method}`);
        res.status(err.code).json({
            code: err.code,
            message: err.message,
        });
    } else {
        next(err);
    }
};


module.exports.internalServerError = function internalServerError(
    err,
    req,
    res,
    next
) {
    console.log(`status - 500, message - ${err.stack}, url - ${req.originalUrl} , method - ${req.method}`);

    res.status(500).json({
        code: 500,
        message: err.message,
    });
};
