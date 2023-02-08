CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status varchar(15),
    user_id int REFERENCES users (id)
);