USE phoneStore;

CREATE TABLE phone (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    imageUrl VARCHAR(255) 
);

INSERT INTO phone (name, brand, price, imageUrl) VALUES
('Phone1', 'Brand1', 499.99, 'url_image1'),
('Phone2', 'Brand2', 699.99, 'url_image2'),
('Phone3', 'Brand3', 899.99, 'url_image3'),
('Phone4', 'Brand4', 899.99, 'url_image4');


CREATE TABLE command (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    phone_id BIGINT,
    userName VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    FOREIGN KEY (phone_id) REFERENCES phone(id)
);

INSERT INTO command (phone_id, userName, address) VALUES
(1, 'John Doe', '123 Main St'),
(2, 'Jane Smith', '456 Oak St'),
(3, 'Bob Johnson', '789 Pine St');
