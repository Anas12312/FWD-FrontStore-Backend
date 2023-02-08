CREATE TABLE orders_products (
    order_id int REFERENCES orders (id),
    product_id int REFERENCES products (id),
    quantity int
);