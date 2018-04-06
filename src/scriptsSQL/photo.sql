CREATE TABLE photos (id INT AUTO_INCREMENT PRIMARY KEY, arthropodId int NOT NULL, namePhoto VARCHAR(250) NOT NULL,
FOREIGN KEY (arthropodId) REFERENCES arthropods(id));