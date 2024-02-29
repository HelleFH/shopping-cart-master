# MERN Shopping Cart

This is a MERN (MongoDB, Express.js, React, Node.js)  shopping cart project that allows users to browse products online. It includes features like user authentication, cart management.

## Features

- User authentication (signup, login, logout).
- Form validation using
- Add products to the shopping cart.
- Manage the shopping cart (add, remove, update items).
- Product detail page.

## Technologies Used

- Frontend:

  - React: A JavaScript library for building user interfaces.
  - Zustand: A state management library for managing application state with simplicity.
  - Tailwind: A CSS framework for responsive and modern UI design.
  - Axios: A popular JavaScript library for making HTTP requests.
  - Formik - For handling forms and form validation.
  - Yup - For schema validation with Formik.
  - React-Toastify - For displaying toast notifications in the application.
  - React-Icons - For including icons in the user interface.

- Backend:
  - Node.js: A server-side JavaScript runtime environment.
  - Express: A web application framework for Node.js.
  - Cors: A middleware for enabling Cross-Origin Resource Sharing.
  - Dotenv: A module for loading environment variables from a .env file.
  - nodemon - For automatically restarting the server during development.
  - bcrypt - For hashing and securing passwords.
  - cookie-parser - For parsing cookies in HTTP requests.
  - cors - For handling Cross-Origin Resource Sharing.
  - jsonwebtoken - For generating and verifying JSON Web Tokens for user authentication.

## Installation

- Clone the repository from GitHub.
- Install Node.js and MongoDB on your system if you haven't already.
- Run

```
npm install
```

in the root directory to install the required dependencies.

- Configure the MongoDB connection string in the server configuration file.
- Run

```
npm run dev
```

start to start the development server.
