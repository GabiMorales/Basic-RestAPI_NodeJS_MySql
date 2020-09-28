CREATE DATABASE IF NOT EXISTS company;

USE company;

CREATE TABLE employees(
	id INT(11) NOT NULL,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);

ALTER TABLE employees
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT= 1;

DESCRIBE employees;

INSERT INTO employees VALUES
	(1,'Gabriel Morales', 20000),
    (2, 'Juan Aranguiz',30000),
    (3, 'Nadia Aguilera', 40000);
    
SELECT * FROM employees;
    