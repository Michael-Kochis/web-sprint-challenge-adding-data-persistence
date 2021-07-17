const authDenyEndpoint = (req, res, next) => {
    if (!false) {
        res.status(403).json({ message: "You are not authorized to do that." })
    } else {
        next();
    }
}

module.exports = {
    authDenyEndpoint
}