# Bookstore API: RESTful Backend

A RESTful API for managing users and books, featuring user authentication with JSON Web Tokens (JWT) and protected routes for secure data management.

-----

### 🚀 Features

  * **User Module**: Register new users and authenticate existing ones to get a JWT.
  * **Book Module**: Perform full CRUD (Create, Read, Update, Delete) operations on books.
  * **Secure Routes**: Protect book creation, update, and delete actions with JWT-based authentication.
  * **Public Routes**: Allow public access to view all books or a single book without authentication.
  * **Data Validation**: Securely hash passwords with `bcryptjs` before storing them.

### 🧱 Tech Stack

  * **Backend**: Node.js, Express.js
  * **Database**: MongoDB, Mongoose
  * **Authentication**: JSON Web Tokens (JWT), `bcryptjs`
  * **Development Tools**: `nodemon`, `dotenv`

-----

### 📦 Getting Started

To get a local copy of this project up and running, follow these simple steps.

#### **Prerequisites**

  * **Node.js & npm**: [Download and install from official website](https://nodejs.org/en/download/).
  * **MongoDB**: A running MongoDB instance, either locally or a cloud service like [MongoDB Atlas](https://www.mongodb.com/atlas).

#### **Installation**

1.  Clone the repository:
    ```bash
    git clone <your-repo-link>
    cd <your-project-name>
    ```
2.  Install all the required dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the root directory and add your environment variables:
    ```ini
    MONGO_URI="your_mongodb_connection_string"
    JWT_SECRET="a_very_strong_random_secret_key"
    PORT=5000
    ```
4.  Run the development server with `nodemon`:
    ```bash
    npm run dev
    ```
    The API should now be running on `http://localhost:5000`.

-----

### ⚙️ API Endpoints

This API is designed to be fully testable with a tool like [Postman](https://www.postman.com/).

#### **User Endpoints**

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/users/register` | Registers a new user. | ❌ No |
| `POST` | `/api/users/login` | Authenticates a user and returns a JWT token. | ❌ No |

#### **Book Endpoints**

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/books` | Retrieves a list of all books. | ❌ No |
| `POST` | `/api/books` | Creates a new book. | ✅ Yes |
| `GET` | `/api/books/:id` | Retrieves a single book by its ID. | ❌ No |
| `PUT` | `/api/books/:id` | Updates a book by its ID. | ✅ Yes |
| `DELETE` | `/api/books/:id` | Deletes a book by its ID. | ✅ Yes |

**Note**: For authenticated routes, add a **Bearer Token** to the `Authorization` header in your request with the token received from the login endpoint.


  * **Web Service**: Set the start command to `npm install && npm start`.
  * **Port**: The API exposes the port using `process.env.PORT || 5000`.
  * **Environment Variables**: Ensure `MONGO_URI` and `JWT_SECRET` are set in the production environment.
