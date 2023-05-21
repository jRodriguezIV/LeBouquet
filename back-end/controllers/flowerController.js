const express = require("express");
const { getAllFlowers, getFlower } = require("../queries/flowers")
const flowers = express.Router();

flowers.get("/", async (req, res) => {
    const allFlowers = await getAllFlowers();
    if (allFlowers[0]) {
        res.status(200).json(allFlowers);
    } else {
        res.status(500).json({error: "server error"})
    }
})

flowers.get("/:id", async (req, res) => {
    const { id } = req.params;
    const flower = await getFlower(id);
    if(flower.id) {
        res.json(flower)
    } else {
        res.status(404).json({error: "flower not found"})
    }
})





module.exports = flowers;