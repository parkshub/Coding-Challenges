-- BIGSERIAL auto-increments eight-byte int

CREATE TABLE person(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(7) NOT NULL,
    dob DATE NOT NULL,
    email VARCHAR(150)
);