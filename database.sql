CREATE DATABASE todo_database;

--\c into todo_database
CREATE TABLE producto(
    producto_id SERIAL PRIMARY KEY,
    nombre VARCHAR (255), 
    precio FLOAT,
    puntos FLOAT
);

CREATE TABLE usuario(
    usuario_id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    puntos FLOAT
);