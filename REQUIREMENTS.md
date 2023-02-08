## API Endpoints
#### Products
- Index "http://localhost:3000/products" [GET]
- Show "http://localhost:3000/products/:id" [GET]
- Create [token required] "http://localhost:3000/products" [POST]

#### Users
- Index [token required] "http://localhost:3000/users" [GET]
- Show [token required] "http://localhost:3000/users/:id" [GET]
- Create [token required] "http://localhost:3000/users" [POST]

#### Orders
- Current Order by user (args: user id)[token required] "http://localhost:3000/orders/:userId" [GET]

## Data Shapes
#### Product
-  id
- name
- price
Table: products (id:varchar, name:varchar, price:int)

#### User
- id
- firstName
- lastName
- password
Table: users (id:varchar, firstName:varchar, lastName:varchar, password:varchar)
#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)
Table: orders (id:varchar, status:varchar, user_id:varchar[foreign key to users table])


Table: orders_products (order_id:varchar[foreign key to orders table], product_id:varchar[foreign key to products table], quantity:int)

