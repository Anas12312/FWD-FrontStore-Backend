CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName varchar(50),
    lastName varchar(50),
    password_digest varchar
);