const notFound = (req, res, next) => {
    const error = new Error(`not found - ${req.originalUrl}`)
    res.status(404)
    next(error)
}

//error middleware
const errorHandler = (error, req, res, next) => {
    if (res.headerSend) {
        return next(error);
    }

    res.status(error.code || 500).json({ message: error.message || "An unknown error occured." })
}

module.exports = { notFound, errorHandler }