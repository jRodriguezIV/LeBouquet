DROP DATABASE IF EXISTS flowers_dev;

CREATE DATABASE flowers_dev;

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    scientific_name TEXT,
    cost DECIMAL NOT NULL,
    color TEXT,
    description VARCHAR,
    size TEXT,
    is_favorite BOOLEAN DEFAULT FALSE
);