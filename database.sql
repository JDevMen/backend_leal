CREATE DATABASE leal_db;

--\c into todo_database
CREATE TABLE producto(
    producto_id SERIAL PRIMARY KEY,
    nombre VARCHAR (255), 
    precio FLOAT DEFAULT 0,
    puntos FLOAT DEFAULT 0
);

CREATE TABLE usuario(
    usuario_id SERIAL PRIMARY KEY,
    correo VARCHAR(255) NOT NULL,
    contrasena VARCHAR(255),
    puntos FLOAT DEFAULT 0
);