const checkName = (req, res, next) => {
    if (req.body.name) {
        next()
    } else {
        res.status(400).json({error: "Flower name is required!"})
    }
}

const checkBoolean = (req, res, next) => {
    const {is_favorite} = req.body
    if(
        is_favorite === true ||
        is_favorite === false
    ) {
        next()
    } else {
        res.status(404).json({error: "is_favorite must be a boolean value"})
    }
}

module.exports = {
    checkName,
    checkBoolean
}