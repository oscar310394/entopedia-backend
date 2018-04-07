CREATE TABLE arthropods(id INT AUTO_INCREMENT PRIMARY KEY, user_id int, subphylum VARCHAR(50) NOT NULL,
order_subphylum VARCHAR(50) NOT NULL, family VARCHAR(50), genus VARCHAR(50), specie VARCHAR(50), 
common_name VARCHAR(50) NOT NULL, scientific_name VARCHAR(50) NOT NULL, description VARCHAR(1500) NOT NULL, 
habits VARCHAR(1000) NOT NULL, habitat VARCHAR(1000) NOT NULL, impact_on_humanity VARCHAR(1500) NOT NULL,
color VARCHAR(200) NOT NULL, body_size VARCHAR(50) NOT NULL, insert_date DATETIME NOT NULL, FOREIGN KEY (user_id) REFERENCES
users(id));