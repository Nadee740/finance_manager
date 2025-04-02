CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);



CREATE TABLE finance_records (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    month VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);



CREATE TABLE expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    month_id INT NOT NULL,
    payment_type VARCHAR(100) NOT NULL,
    payment_mode VARCHAR(100) NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (month_id) REFERENCES finance_records(id) ON DELETE CASCADE
);
