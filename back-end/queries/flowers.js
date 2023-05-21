const db = require("../db/dbConfig");

const getAllFlowers = async () => {
  try {
    const allFlowers = await db.any("SELECT * FROM flowers");
    return allFlowers;
  } catch (error) {
    return error;
  }
};

const getFlower = async (id) => {
  try {
    const flower = await db.one("SELECT * FROM flowers WHERE id=$1", id);
    return flower;
  } catch (error) {
    return error;
  }
};

const createFlower = async (flower) => {
  try {
    const newFlower = await db.one(
      "INSERT INTO flowers (name, scientific_name, cost, color, watering, sunlight, image, is_favorite) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        flower.name,
        flower.scientific_name,
        flower.cost,
        flower.color,
        flower.watering,
        flower.sunlight,
        flower.image,
        flower.is_favorite,
      ]
    );
    return newFlower;
  } catch (error) {
    return error;
  }
};

const deleteFlower = async (id) => {
  try {
    const deletedFlower = await db.one(
      "DELETE FROM flowers WHERE id = $1 RETURNING *",
      id
    );
    return deletedFlower;
  } catch (error) {
    return error;
  }
};

const updateFlower = async (id, flower) => {
  try {
    const updatedFlower = await db.one(
      "UPDATE flowers SET name=$1, scientific_name=$2, cost=$3, color=$4, watering=$5, sunlight=$6, image=$7, is_favorite=$8 WHERE id=$9 RETURNING * ",
      [
        flower.name,
        flower.scientific_name,
        flower.cost,
        flower.color,
        flower.watering,
        flower.sunlight,
        flower.image,
        flower.is_favorite,
        id,
      ]
    );
    return updatedFlower
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllFlowers,
  getFlower,
  createFlower,
  deleteFlower,
  updateFlower,
};
