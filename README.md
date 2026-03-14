# Live Polls Frontend

This project is the frontend for a real-time polling application built
with React and Vite.

Users can create polls, share them with others, and vote in real time.
The application updates poll results instantly using WebSocket
connections.

The frontend communicates with the backend REST API and Socket.IO server
to manage polls and votes.

# Features

Main features of the application:

-   User registration
-   User login
-   Create polls
-   View available polls
-   Vote in polls
-   Real-time vote updates
-   Close polls
-   Display live poll results
-   Notifications for errors and actions



# Tech Stack

This project uses the following technologies:

-   React
-   Vite
-   Redux Toolkit
-   React Router
-   Axios
-   React Hook Form
-   Yup validation
-   Bootstrap / React Bootstrap
-   React Toastify
-   Socket.IO Client for real-time updates
-   React Bootstrap Icons



# Backend API

This frontend connects to the Live Polls Backend API.

Example API base URL:
```
http://localhost:5000/api/v1
```
Example endpoints used:
```
POST /auth/create-account
POST /auth/login
POST /auth/refresh-token

GET /polls
POST /polls
POST /polls/:id/close
```


# Real-Time Events

Real-time communication is implemented using Socket.IO.

Example events:

joinPoll updatePollData castVote voteAccepted voteRejected pollClosed

These events allow the UI to update instantly when votes are cast.



# Environment Setup

Create a `.env` file in the project root.

Example:
```
VITE_API_URL=http://localhost:5000/api/v1
VITE_SOCKET_URL=http://localhost:5000
```
These variables configure the backend API and WebSocket server.


# Demo Credentials
- **Email** - `demo.user1.chariot057@aleeas.com`
- **Password** - `demo@1234`


# Getting Started

Clone the repository
```
git clone https://github.com/vipulsawant8/live-polls-frontend.git
```
Install dependencies
```
npm install
```
Start the development server
```
npm run dev
```
The app will run on:
```
http://localhost:5173

```

# Build for Production

Create a production build
```
npm run build
```
Preview the production build
```
npm run preview
```


# Project Purpose

This project was created to practice:

-   React application development
-   Real-time applications with WebSockets
-   Redux state management
-   API integration
-   Authentication flows
-   Building full-stack applications



# License

ISC License
