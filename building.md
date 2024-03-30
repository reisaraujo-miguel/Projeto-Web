## Inside the `frontend` folder, you can run several commands:

### npm install

-   Installs all development dependencies

### npm start

-   Starts the development server.

### npm run build

-   Bundles the app into static files for production.

### npm test

-   Starts the test runner.

## Inside the `backend` folder you should run:

### npm install

-   Installs all development dependencies.

### node app.js

-   Start the backend server.

## We suggest that you begin by typing:

-   `cd frontend` to enter the app folder
-   `npm install` to download the dependencies
-   `npm start` to start the app

And then run the backend:

-   `cd ../backend` to enter the backend folder
-   `npm install` to download the dependencies
-   `node app.js` to start the backend

For the backend you'll need an mongodb database to access. Then you need to
create an `.env` file inside the backend folder setting the environment variable
`MONGO_URI` with the uri used to connect to your database.

The database must have two collections: `products` and `users`.

The documents inside the `products` collection must follow the following format:

```json
{
	"_id": { "$oid": "64b0d1d3cad8a2a3e4666fb7" },
	"name": "laptopteste1",
	"slug": "laptopteste1",
	"description": "teste1",
	"price": { "$numberInt": "40" },
	"quantity": { "$numberInt": "2" },
	"imgPath": "laptop-1.jpg",
	"__v": { "$numberInt": "0" }
}
```

And the documents inside the `users` collection should follow the following format:

```json
{
	"_id": { "$oid": "64ae1c6b5b8418ee77354303" },
	"name": "mingau",
	"email": "mingau@gmail.com",
	"cpf": { "$numberInt": "666" },
	"username": "miguel",
	"phone": { "$numberInt": "333" },
	"address": {
		"cep": { "$numberInt": "213" },
		"bairro": "Hell",
		"number": { "$numberInt": "666" }
	},
	"password": "666",
	"isAdmin": false,
	"__v": { "$numberInt": "0" },
	"token": "NJcE5XZqMu2DL78iQE9wG7oXnV6OBoUZ"
}
```
