# Real-Time Chat Application with Translation

A full-stack real-time chat application built with React, Node.js, MongoDB, and WebSocket integration. Features include user authentication, real-time messaging, and automatic message translation.

## Features

- User authentication (Signup/Login)
- Real-time messaging using WebSocket
- Message translation using Google Translate API
- Modern UI with TailwindCSS
- Responsive design

## Tech Stack

- Frontend: React (Vite) + TailwindCSS
- Backend: Node.js + Express
- Database: MongoDB
- Authentication: JWT
- Real-time: Socket.io
- Translation: Google Translate API

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd ../client
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   GOOGLE_TRANSLATE_API_KEY=your_google_translate_api_key
   ```

4. Start the development servers:
   ```bash
   # Start backend server
   cd server
   npm run dev

   # Start frontend server
   cd ../client
   npm run dev
   ```

## Project Structure

```
chat-app/
├── client/             # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.tsx
│   └── package.json
└── server/            # Node.js backend
    ├── src/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   └── server.js
    └── package.json
``` 