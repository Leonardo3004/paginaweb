# mi-api-postgresql

This is a REST API for managing a PostgreSQL database. The database consists of four tables: Usuarios, Muestras, Servicios, and Resultados.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have Node.js and PostgreSQL installed on your machine.

### Installing

1. Clone the repository
```
git clone https://github.com/yourusername/mi-api-postgresql.git
```

2. Install the dependencies
```
npm install
```

3. Create a `.env` file in the root directory of the project and add the following environment variables:
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database_name
DB_USER=your_username
DB_PASSWORD=your_password
```

4. Run the server
```
npm start
```

The server will start on `http://localhost:3000`.

## API Endpoints

The API has the following endpoints:

- `GET /usuarios`: Get all users
- `POST /usuarios`: Create a new user
- `GET /usuarios/:id`: Get a user by id
- `PUT /usuarios/:id`: Update a user by id
- `DELETE /usuarios/:id`: Delete a user by id

- `GET /muestras`: Get all samples
- `POST /muestras`: Create a new sample
- `GET /muestras/:id`: Get a sample by id
- `PUT /muestras/:id`: Update a sample by id
- `DELETE /muestras/:id`: Delete a sample by id

- `GET /servicios`: Get all services
- `POST /servicios`: Create a new service
- `GET /servicios/:id`: Get a service by id
- `PUT /servicios/:id`: Update a service by id
- `DELETE /servicios/:id`: Delete a service by id

- `GET /resultados`: Get all results
- `POST /resultados`: Create a new result
- `GET /resultados/:id`: Get a result by id
- `PUT /resultados/:id`: Update a result by id
- `DELETE /resultados/:id`: Delete a result by id

## Running the Tests

To run the tests, use the following command:
```
npm test
```

## Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Authors

- Your Name

## License

This project is licensed under the MIT License.