# QuickShow - Movie Ticket Booking Platform

QuickShow is a modern, full-stack movie ticket booking application built with the MERN stack (MongoDB, Express.js, React, Node.js). The platform provides a seamless experience for users to browse movies, book tickets, and manage their bookings, while offering administrators powerful tools to manage content and showtimes.

![QuickShow Banner](https://via.placeholder.com/1200x400/1e40af/ffffff?text=QuickShow+Ticket+Booking)

## ✨ Features

### User Features
- 🎬 Browse and search movies with detailed information
- 🎟️ Book tickets with seat selection
- 🔐 Secure authentication with Clerk
- 📱 Responsive design for all devices
- 📧 Email notifications for bookings
- 💳 Secure payment processing with Stripe
- 📱 User profile and booking history

### Admin Features
- 🎥 Movie management (add, edit, remove)
- 🕒 Showtime scheduling
- 📊 Booking analytics
- 🎭 Theater and screen management
- 📈 Sales and revenue reports

## 🚀 Tech Stack

### Frontend
- ⚛️ React 19
- 🎨 TailwindCSS for styling
- 🔄 React Router for navigation
- 🔐 Clerk for authentication
- 📦 Vite for build tooling

### Backend
- 🛠️ Node.js with Express
- 🗄️ MongoDB with Mongoose
- 🔒 JWT Authentication
- 📧 Nodemailer for email notifications
- 💳 Stripe for payments
- ☁️ Cloudinary for media storage
- 📅 Inngest for background jobs

## 🛠️ Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance
- Clerk account for authentication
- Stripe account for payments
- Cloudinary account for media storage

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/quickshow.git
cd QuickShow
```

### 2. Set up the backend
```bash
cd server
cp .env.example .env
# Update the .env file with your credentials
npm install
npm start
```

### 3. Set up the frontend
```bash
cd ../client
cp .env.example .env
# Update the .env file with your credentials
npm install
npm run dev
```

### 4. Access the application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 📂 Project Structure

```
QuickShow/
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   └── src/               # React components and pages
│       ├── components/    # Reusable UI components
│       ├── pages/         # Page components
│       ├── context/       # React context providers
│       ├── hooks/         # Custom React hooks
│       └── utils/         # Utility functions
│
└── server/                # Backend Express server
    ├── config/           # Configuration files
    ├── controllers/      # Request handlers
    ├── middleware/       # Express middleware
    ├── models/           # MongoDB models
    ├── routes/           # API routes
    └── server.js         # Server entry point
```

## 🌐 Environment Variables

### Client (`.env` in /client)
```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
# Add other frontend environment variables here
```

### Server (`.env` in /server)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLERK_SECRET_KEY=your_clerk_secret_key
# Add other environment variables as needed
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile

### Movies
- `GET /api/movies` - Get all movies
- `GET /api/movies/:id` - Get movie by ID
- `POST /api/movies` - Create a new movie (Admin only)
- `PUT /api/movies/:id` - Update movie (Admin only)
- `DELETE /api/movies/:id` - Delete movie (Admin only)

### Theaters
- `GET /api/theaters` - Get all theaters
- `GET /api/theaters/:id` - Get theater by ID
- `POST /api/theaters` - Create a new theater (Admin only)

### Shows
- `GET /api/shows` - Get all shows
- `GET /api/shows/movie/:movieId` - Get shows by movie ID
- `POST /api/shows` - Create a new show (Admin only)

### Bookings
- `GET /api/bookings` - Get user's bookings
- `POST /api/bookings` - Create a new booking
- `GET /api/bookings/:id` - Get booking by ID

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [Clerk](https://clerk.com/)
- [Stripe](https://stripe.com/)

---

<p align="center">
  Made with ❤️ by Your Name | © 2025 QuickShow
</p>
