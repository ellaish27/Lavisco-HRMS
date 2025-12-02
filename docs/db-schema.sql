-- Full MySQL schema for Lavisco HRMS
CREATE DATABASE IF NOT EXISTS lavisco_hrms;
USE lavisco_hrms;

CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  role ENUM('admin', 'hrOfficer', 'employee') NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  phone VARCHAR(20),
  department_id INT,
  is_locked BOOLEAN DEFAULT FALSE,
  failed_login_attempts INT DEFAULT 0,
  locked_until DATETIME NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Insert sample admin
INSERT INTO departments (name) VALUES ('HR'), ('Engineering'), ('Finance');
INSERT INTO users (role, email, password_hash, first_name, last_name)
VALUES ('admin', 'admin@lavisco.com', '$2b$12$KfEzS6DxYq7jF9vJqQZz.eL4nD2sXx1J2J2J2J2J2J2J2J2J2J2J2', 'Admin', 'User');
-- Password: "admin123" (bcrypt hash)
