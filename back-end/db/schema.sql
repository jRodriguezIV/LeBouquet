DROP DATABASE IF EXISTS flowers_dev;

CREATE DATABASE flowers_dev;

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    scientific_name TEXT,
    cost DECIMAL NOT NULL,
    color TEXT,
    watering TEXT,
    sunlight TEXT,
    image TEXT
    is_favorite BOOLEAN DEFAULT FALSE
);