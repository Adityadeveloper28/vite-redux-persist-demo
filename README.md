# 🚀 Vite Redux Persist Demo  

A demo project built with **React + Vite + Redux Toolkit + Redux Persist** showcasing a simple **user authentication flow (login/logout)** with modern UI.  

## ✨ Features
- ⚡ Vite for fast development
- 🛠 Redux Toolkit for state management
- 💾 Redux Persist to save user state in localStorage
- 👤 User authentication demo (login/logout)
- 🎨 Tailwind CSS for modern UI

## 📦 Tech Stack
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Tailwind CSS](https://tailwindcss.com/)

## 🛠 Setup & Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/Adityadeveloper28/vite-redux-persist-demo.git
   cd vite-redux-persist-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the dev server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🧩 How It Works
- The app uses **Redux Toolkit** to manage user authentication state.
- **Redux Persist** automatically saves the state to `localStorage`, so the user remains logged in even after a refresh.
- Includes a simple login form styled with **Tailwind CSS**.

## 📂 Project Structure
```
vite-redux-persist-demo/
├── src/
│   ├── store/
│   │   ├── store.js        # Redux store with persist
│   │   └── userSlice.js    # User slice (login/logout)
│   ├── App.jsx             # Main app with auth UI
│   ├── main.jsx            # Entry point
│   └── index.css           # Tailwind CSS
└── ...
```

## 🚀 Demo Flow
1. Open the app  
2. Login with demo credentials → state stored in Redux + persisted in localStorage  
3. Refresh → User stays logged in  
4. Logout → Clears state  

---

### 📌 Repo Info
**Name:** `vite-redux-persist-demo`  
**Description:** React + Vite + Redux Toolkit + Redux Persist demo with auth flow  

---

💡 This is just a **demo starter project** — you can expand it with APIs, protected routes, JWT authentication, etc.
