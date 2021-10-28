// const errors = ( req, res, next) => {
//     // eslint-disable-line no-unused-vars
//    const error = new Error('Not Found')
//     const message = error.message || error;
//     error.status = 404
//     next(error)
// }

const errorHandling = (error, req, res, next) => {
    // eslint-disable-line no-unused-vars
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });
};

module.exports = {
    // errors, 
    errorHandling
}