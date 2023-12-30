USE phoneStore;

CREATE TABLE phone (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(255) NOT NULL
);

INSERT INTO phone (name, brand, price, image_url) VALUES
('IPhone 12', 'Apple', 499.99, 'https://images.unsplash.com/photo-1621939703744-9b75e3f7ff0e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('IPhone 14', 'Apple', 699.99, 'https://images.unsplash.com/photo-1663314326607-483dbf45a98b?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Iphone 15', 'Apple', 899.99, 'https://images.unsplash.com/photo-1695578130349-15e2dee7ca78?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('Iphone 14 Max', 'Apple', 899.99, 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('IPhone 15 Pro', 'Apple', 1499.99, 'https://images.unsplash.com/photo-1695048133021-be2def43f3b2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
('IPhone 16 Pro', 'Apple', 3499.99, 'https://images.unsplash.com/photo-1702184117235-56002cb13663?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

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
