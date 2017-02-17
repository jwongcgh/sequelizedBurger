CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
  id INT AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name)
VALUES ('Cheese Burger'), ('Bacon and Cheese'), ('Portobello Mushroom');

drop database if exists burgers_db;

select * from burgers;