# Patient - Doctor Appointment App

This project includes a full-stack web application that allows patients and doctors to schedule and manage appointments.

## Technologies

- **Frontend:**
  - Created using React.
  - Utilizes libraries such as React Router, Material UI, Formik, Yup, and Toastify.

- **Backend:**
  - Developed with Node.js and Express.js.
  - Utilizes MongoDB as the database, integrated with Mongoose.
  
- **Authentication and Authorization:**
  - User authentication is managed using Firebase Authentication.
  - Authorization is implemented using React Router's security features.

## Project Structure

- **client:** Frontend code
  - **src:**
    - **components:** React components
    - **pages:** Application pages
    - **utils:** Helper functions and constants

- **server:** Backend code
  - **controllers:** MongoDB operations and business logic
  - **models:** MongoDB schemas
  - **routes:** API routes
  - **config:** Firebase and other configuration files

## Installation

1. **Frontend Installation:**
   ```bash
   cd client
   npm install
   npm start
