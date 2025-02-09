# Event Management Platform

Welcome to the Event Management Platform! This platform allows organizations to efficiently manage events and employees through a robust MERN stack application.

## Project Links

- **GitHub Repository**: [Event-Management-Platform](https://github.com/Shaileshkale17/Event-Management-Platform)
- **Backend Deployment**: [Backend URL](https://event-management-platform-pi.vercel.app/)
- **Frontend Deployment**: [Frontend URL](https://event-management-platform-l2y8.vercel.app/)

## Localhost Setup

- **Frontend**: [http://localhost:5173/](http://localhost:5173/)
- **Backend**: [http://localhost:8080/](http://localhost:8080/)

## Admin and Employee Login Route

- Login Route: `/employee-login`
- Email : admin@gmail.com
- Password : Password123

### Employee Login

- Email : xyz@gmail.com
- Password : Password123

## Backend Routes

Below are the routes available in the backend:

### Authentication Routes

- `POST /api/auth/login` - Login for users (Admin/Employee).
- `POST /api/auth/register` - Register a new user (Admin/Employee).

### Employee Management Routes

- `GET /api/employees` - Get all employees.
- `GET /api/employees/:id` - Get employee details by ID.
- `POST /api/employees` - Add a new employee.
- `PUT /api/employees/:id` - Update employee details.
- `DELETE /api/employees/:id` - Delete an employee.

### Event Management Routes

- `GET /api/events` - Get all events.
- `GET /api/events/:id` - Get event details by ID.
- `POST /api/events` - Create a new event.
- `PUT /api/events/:id` - Update event details.
- `DELETE /api/events/:id` - Delete an event.

## Frontend Routes

Below are the routes available in the frontend:

### Public Routes

- `/` - Homepage
- `/login` - Login page for employees and admin.

### Admin Routes

- `/employee-login` - Employee/Admin Login.
- `/dashboard-main` - Admin dashboard.
- `/dashboard-main-add` - Add the Event.
- `/admin/events` - Manage events.
- `/admin/settings` - Admin settings.

### Employee Routes

- `/employee-login` - Employee/Admin Login.
- `/dashboard-emp` - Employee dashboard.

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB
- Git

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Shaileshkale17/Event-Management-Platform.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd Event-Management-Platform/backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and configure the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=8080
   ```
5. Start the backend server:
   ```bash
   npm run start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd Event-Management-Platform/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm run dev
   ```

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Hosting**: Vercel

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

## Feel free to reach out if you have any questions or suggestions!

# 👉 My Portfolio

- **Portfolio Website** : [Shailesh kale](https://protfolio-shailesh-full-stack-developer.vercel.app/)
- **Linkedin** : [Shailesh kale](https://www.linkedin.com/in/shailesh-kale-0b1236228/)
- **GitHub** : [Shailesh kale](https://github.com/Shaileshkale17)
