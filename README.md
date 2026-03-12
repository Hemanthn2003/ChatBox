# ChatBox 🤖💬

**ChatBox** is a simple chatbot web application built using **ReactJS**.
The application allows users to send messages and receive automated replies based on predefined commands.

This project demonstrates how to build a **basic conversational UI**, manage state in React, and simulate chatbot responses.

---

## 🚀 Features

* 💬 Chat-style user interface
* ⚡ Instant message rendering using React state
* 🤖 Automated chatbot responses
* 🎲 Fun commands like **flip a coin**
* ⌨️ Send messages using **Enter key**
* 📜 Auto-scroll to latest message
* 📱 Responsive chat layout using **Flexbox**

---

## 🧠 Supported Chat Commands

The chatbot currently understands the following messages:

| User Message             | Bot Response                            |
| ------------------------ | --------------------------------------- |
| `hello`, `hi`            | Hello! How can I help you?              |
| `how are you`            | I'm doing great! How can I help you?    |
| `flip a coin`            | Returns **Heads** or **Tails** randomly |
| `roll a dice`            | Returns a number between **1–6**        |
| `what is the date today` | Returns today's date                    |

---

## ⚠️ Default Responses

If the chatbot does not recognize a message:

```
Sorry, I didn't quite understand that. Currently, I only know how to flip a coin, roll a dice, or get today's date. Let me know how I can help!
```

If the user sends an empty message:

```
Sorry, it looks like your message is empty. Please make sure you send a message and I will give you a response.
```

---

## 🛠️ Technologies Used

* **ReactJS**
* **JavaScript (ES6+)**
* **Vite**
* **CSS Flexbox**
* **React Hooks (useState, useEffect, useRef)**

---

## 📂 Project Structure

```
ChatBox
│
├── src
│   ├── App.jsx
│   ├── MessageInput.jsx
│   ├── MessageRender.jsx
│   ├── profile-images
│   │   ├── user.png
│   │   └── robot.png
│   └── App.css
│
├── index.html
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

Clone the repository:

```
git clone https://github.com/Hemanthn2003/ChatBox.git
```

Navigate to the project folder:

```
cd ChatBox
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open the app in your browser:

```
http://localhost:5173
```

---

## 🎯 Learning Objectives

This project was created to practice:

* Building **React functional components**
* Managing **state and events**
* Handling **user input**
* Rendering **dynamic message lists**
* Implementing **basic chatbot logic**

---

## 🔮 Future Improvements

Possible enhancements for this project:

* Add **AI-powered chatbot responses**
* Implement **typing indicator**
* Add **message timestamps**
* Improve **UI design and animations**
* Store chat history in **local storage or database**

---

## 👨‍💻 Author

**Hemanth N**

Electronics & Communication Engineering Graduate
Aspiring **Mern Stack Developer**

GitHub:
https://github.com/Hemanthn2003

---

⭐ If you like this project, consider **starring the repository**!
