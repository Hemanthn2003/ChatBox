# React ChatBox 💬🤖

A simple **ChatBox application built using ReactJS and Vite** that simulates a conversation between a **user and a chatbot**.

This project demonstrates how a chatbot can receive a message from the user and generate a reply using React state management.

---

## 🚀 Features

* 💬 Chat-style messaging interface
* 👤 User message input
* 🤖 Chatbot automated responses
* ⚡ Real-time UI updates using React state
* 🔑 Unique message IDs using `crypto.randomUUID()`
* 🧹 Input field clears after sending message
* 🎯 Simple React component structure

---

## 🛠️ Technologies Used

* ReactJS
* Vite
* JavaScript (ES6+)
* HTML5
* CSS3

---

## 📂 Project Structure

```bash
CHATBOX
│
└── ChatBox
    │
    ├── node_modules
    ├── public
    │   └── vite.svg
    │
    ├── src
    │   ├── assets
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   ├── main.jsx
    │   └── MessageInput.jsx
    │
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    └── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 2️⃣ Navigate to the project folder

```bash
cd ChatBox
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run the development server

```bash
npm run dev
```

The application will start at:

```
http://localhost:5173
```

---

## 📸 How the Chat Works

1. The user types a message in the input field.
2. When the **Send** button is clicked, the message is added to the chat.
3. Each message receives a **unique ID** using `crypto.randomUUID()`.
4. The chatbot processes the query and returns a response.
5. Messages are dynamically rendered using React state.

---

## 🎯 Learning Objectives

This project was created to practice:

* React Functional Components
* React Hooks (`useState`)
* Event Handling in React
* Dynamic Rendering of Messages
* Creating a basic chat interface

---

## 🔮 Future Improvements

* Add AI chatbot integration
* Add typing animation
* Implement auto-scroll for new messages
* Improve UI design
* Add message timestamps
* Connect to backend APIs

---

## 👨‍💻 Author

**Hemanth N**

Electronics & Communication Engineering Graduate
Aspiring **Mern Stack Developer**

---

⭐ If you like this project, consider **starring the repository**.

