# Task Manager App (MERN Stack)

A simple personal task manager web app built using the MERN stack (MongoDB, Express, React, Node.js). It lets users register, log in, and manage their daily tasks effectively.

## 🚀 Features

- User Registration & Login (JWT-based)
- Add, View, Complete, Delete tasks
- Filter tasks: All / Pending / Completed
- Protected Dashboard
- Responsive, clean UI using Tailwind CSS

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Auth**: JWT, bcryptjs

## 📁 Folder Structure

```
project-root/
├── client/        # React frontend
└── server/        # Express backend
```

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/task-manager-mern.git
cd task-manager-mern
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Setup environment variables

Create a `.env` file in `/server`:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Run backend

```bash
npm run dev
```

### 5. Install frontend dependencies

```bash
cd ../client
npm install
```

### 6. Run frontend

```bash
npm run dev
```

## 🌐 API Endpoints (Backend)

| Method | Endpoint           | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register new user |
| POST   | /api/auth/login    | Login user        |
| GET    | /api/tasks         | Get all tasks     |
| POST   | /api/tasks         | Add new task      |
| PUT    | /api/tasks/\:id    | Update task       |
| DELETE | /api/tasks/\:id    | Delete task       |

## 📌 To Do

-

---

## 📸 UI Preview

(To be added later once design is ready)

---

## 📄 License

MIT License

