# Expense Tracker

A simple Expense Tracker web application built with **React** and **Firebase**.  
Features include user authentication, adding expenses, and viewing your total spending.

---

## Features

- **User Sign Up, Login, and Logout** (Firebase Authentication)
- **Add new expenses** (amount + description)
- **View a list of all your expenses**
- **See your total spent amount**
- **Real-time updates** (Firestore)

---

## Getting Started

### 1. Clone the repository

git clone https://github.com/yourusername/expense-tracker.git
cd expense-tracker

### 2. Install dependencies

npm install

### 3. Set up Firebase

- Go to [Firebase Console](https://console.firebase.google.com/).
- Create a new project.
- Enable **Authentication** (Email/Password).
- Create a **Firestore Database**.
- Copy your Firebase config and paste it into `src/firebase.js`:

const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_AUTH_DOMAIN",
projectId: "YOUR_PROJECT_ID",
storageBucket: "YOUR_STORAGE_BUCKET",
messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
appId: "YOUR_APP_ID"
};

### 4. Run the app

npm start

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Folder Structure

src/
App.js
firebase.js
public/
index.html
README.md
---

## Future Improvements

- Edit and delete expenses
- Categorize expenses
- Data visualization (charts)
- Export data (CSV, PDF)

---

## License

This project is open source and available under the MIT License.

---

**Enjoy tracking your expenses!**

---


