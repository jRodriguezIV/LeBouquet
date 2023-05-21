const db = require("../db/dbConfig");

const getAllFlowers = async () => {
    try {
        const allFlowers = await db.any("SELECT * FROM flowers");
        return allFlowers
    } catch (error) {
        return error
    }
}

const getFlower = async (id) => {
    try {
        const flower = await db.one("SELECT * FROM flowers WHERE id=$1", id);
        return flower
    } catch (error) {
        return error
    }
}

module.exports = {
    getAllFlowers,
    getFlower
}