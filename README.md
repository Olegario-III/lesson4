# Simple Login Demo 🔐

A minimal React app demonstrating **conditional rendering** with login/logout functionality.

## ✨ Features

- Toggle between logged-in and logged-out states
- Display a personalized welcome message
- Login as different users (Jacob, Robert, or Anonymous)
- Simple and clean UI with inline styles

## 🖼️ Preview

- **Logged out**: Shows "Please log in." with login buttons
- **Logged in**: Shows "Welcome, [Name]!" with a Logout button

## 🚀 How to Run

1. Make sure you have a React project set up (Create React App, Vite, etc.)
2. Replace the content of your `App.js` (or `App.jsx`) with the provided code
3. Start the development server:

```bash
npm start
# or
npm run dev

## 🛠️ Tech Stack

React (Functional Component + useState Hook)
Inline CSS


## 📁 Project Structure
textsrc/
├── App.js          # Main component with login logic
└──

## 🎯 How It Works

Uses useState to track login status (isLoggedIn) and the user's name
Conditionally renders different UI based on the login state
Clicking any login button sets isLoggedIn to true and updates the name
Clicking Logout resets the state

## 📝 Notes

Default name is "annonymous" (note the spelling)
Great for learning conditional rendering and basic state management in React
