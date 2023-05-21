const express = require("express");
const { getAllFlowers, getFlower, createFlower, deleteFlower } = require("../queries/flowers");
const flowers = express.Router();

flowers.get("/", async (req, res) => {
  const allFlowers = await getAllFlowers();
  if (allFlowers[0]) {
    res.status(200).json(allFlowers);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

flowers.get("/:id", async (req, res) => {
  const { id } = req.params;
  const flower = await getFlower(id);
  if (flower.id) {
    res.json(flower);
  } else {
    res.status(404).json({ error: "flower not found" });
  }
});

flowers.post("/", async (req, res) => {
  try {
    const flower = await createFlower(req.body);
    res.status(200).json(flower);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

flowers.delete("/", async (req,res) => {
    const { id } = req.params;
    const deletedFlower = await deleteFlower(id);
    if (deletedFlower.id) {
        res.status(200).json(deletedFlower)
    } else {
        res.status(404).send("Flower not found")
    }
})

module.exports = flowers;
