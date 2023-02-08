Storefront Backend Project

##Project Setup
before starting the application you have to:
1) Create a postgres database with the name "store"
2) Create another database for testing with the name "store_test
2) Run the command "db-migrate up"
3) Run "yarn install"
4) Create the .env in the root folder with all the credintials needed like this:
	POSTGRES_HOST=127.0.0.1
	POSTGRES_DB=store
	POSTGRES_TEST_DB=store_test
	POSTGRES_USER=postgres
	POSTGRES_PASSWORD=0102736245
	BCRYPT_PASSWORD=anashesham
	ENV=dev
	SALT_ROUND=10
	TOKEN_SECRET=anas123
5)Run the command "yarn run tsc" to build the application
6)Run the command "yarn start" to start the application
7)Run the command "yarn run test" to start the application testing

##Application's specs
the server is running on port 3000
this is a JWT to be used in the requests: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJwYXNzd29yZF9kaWdlc3QiOiIkMmIkMTAkN0RFZ1hJT0NSbVlSR2xqY1VxUW5FT2twU3JrN3JveWp5L2suNENJcjduMTFrMW5PVmpxWUsifSwiaWF0IjoxNjc1Njk1NzkwfQ.z2sgW9gPqGQgnSShT1UV8iWAdcnhQjDWCDgNaf87mIM
the application has 7 endpoints:
1) the Create Product Endpoint:
	"/products" [POST]
	the payload needed:
	{
		name:"string",
		price:"number"
	}
	this end point needs a jwt token to work
	this endpoint return the created product
2) the Index Product Endpoint:
	"/products" [GET]
	this endpoint return all the products exist in the database
3) the Show Product Endpoint:
	"/products/:id" [GET]
	this end point returns the product with the given id if exists in database

4) the Create User Endpoint:
	"/users" [POST]
	the payload needed:
	{
		firstname:"string",
		lastname:"string",
		password:"string"
	}
	this end point needs a jwt token to work
	this endpoint return the created user and a new jwt
5) the Index User Endpoint:
	"/users" [GET]
	this endpoint return all the users exist in the database
	this end point needs a jwt token to work
6) the Show User Endpoint:
	"/users/:id" [GET]
	this end point returns the user with the given id if exists in database
	this end point needs a jwt token to work
7) the Show Order Endpoint:
	"/orders/:user_id" [GET]
	this endpoint returns the order made by the user whose id is given if exists
	this end point needs a jwt token to work