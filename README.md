# Cinephora – Find Your Next Favorite Film Fast & Easy.

**Cinephora** is a blazing-fast, modern movie discovery app built with **React 19** and **Vite**. It allows users to search, explore, and stay updated on trending films using The Movie Database (TMDB) API. With smooth search interactions and backend-powered trend tracking via **Appwrite**, this project demonstrates full-stack proficiency with a focus on performance, user experience, and clean architecture.

---

<img width="1685" height="852" alt="image" src="https://github.com/user-attachments/assets/21aac141-c120-4f71-af2e-126f96f944b4" />


## ✨ Key Features

- 🔍 **Live Movie Search** – Instantly search movies from TMDB with real-time feedback.
- 🚀 **Debounced Input** – Prevents API overloading using a 500ms delay via `react-use`'s `useDebounce`.
- 🔥 **Top Trends** – Tracks and displays the 5 most-searched movie keywords using persistent Appwrite backend logic.
- 📱 **Fully Responsive** – Clean, mobile-first design with Tailwind CSS 4.0 for consistent styling across all devices.
- 🎯 **Modern Stack** – Built on React 19 with functional components and hooks for scalability and maintainability.

---

## 🛠️ Tech Stack & Tools

| Technology             | Purpose & Highlights                                                                 |
|------------------------|----------------------------------------------------------------------------------------|
| **React 19**           | Core framework for building dynamic UIs using modern features like concurrent rendering and hooks (`useState`, `useEffect`) |
| **Vite**               | Ultra-fast bundler and dev server providing superior DX and instant HMR                |
| **Tailwind CSS v4.0**  | Utility-first CSS framework enabling rapid, responsive design with minimal CSS bloat  |
| **TMDB API**           | Source of real-time, rich movie data including posters, ratings, and metadata         |
| **Appwrite (BaaS)**    | Handles backend logic for trending searches with secure database, auth, and API layers |
| **react-use**          | Provides battle-tested React hooks like `useDebounce` for efficient state handling    |
| **Node.js & npm**      | Core runtime and package manager for running scripts and managing project dependencies |
| **.env.local**         | Used for securely injecting API keys and Appwrite configurations into the build       |
| **Git & GitHub**       | Tracks code changes and enables team collaboration with a clean commit history         |

---

## 📝 Learning Project

This project was built as a **hands-on learning journey**, allowing me to apply and internalize key front-end and full-stack development skills. Here's what I learned and accomplished through this build:

- ✅ Mastered **React 19 fundamentals** – including hooks like `useState`, `useEffect`, component structure, and state-driven rendering.
- 🔌 Successfully **integrated external APIs** – fetched dynamic movie data from TMDB and connected Appwrite for backend services.
- 🧠 Developed **custom algorithms** – implemented debounced search logic and real-time trending keyword analysis using database queries.
- 🗂️ Learned to **configure and use databases** – managed collections, documents, and permissions in Appwrite to store user search data securely.
- 💅 Applied **responsive UI design** – built a consistent, mobile-first interface using Tailwind CSS v4.0.
- 🔐 Handled **environment variables securely** – created a `.env.local` file and properly configured environment keys for both local and production environments.
- 🚀 Deployed on **Vercel** – learned to set up a live, production-ready React app using Vercel's CI/CD pipeline.
- 🛠️ Debugged real-world **deployment issues** – fixed `401 Unauthorized` TMDB API errors by troubleshooting API key setup and ensuring correct environment variable mapping in the Vercel dashboard.
- 🧪 Practiced **version control with Git** – managed changes with a clean, structured commit history and GitHub integration.
- ⚙️ Improved understanding of **tooling & performance** – used Vite for lightning-fast dev builds, hot module replacement, and optimized production output.

> This project helped me bridge the gap between theory and practice — teaching me how to build scalable, real-world apps from scratch and deploy them successfully.

---

## 📦 Project Structure

├── public/ -
│ ├── hero-bg.png -
│ ├── hero-img.png
│ ├── logo.png
│ ├── no-poster.png
│ ├── rating.svg
│ └── search.svg
│
├── src/
│ ├── assets/ # Static assets (if used inside React)
│ ├── components/ # Reusable UI components
│ │ ├── MovieCard.jsx
│ │ ├── Search.jsx
│ │ └── Spinner.jsx
│ ├── App.jsx # Root component
│ ├── appwrite.js # Appwrite configuration and logic
│ ├── main.jsx # Entry point for React
│ ├── App.css # Component-level styles
│ └── index.css # Global styles
│
├── .env.local # Environment variables (excluded from git)
├── index.html # Base HTML template used by Vite
├── vite.config.js # Vite project configuration
├── package.json # Project metadata and dependencies
├── package-lock.json # Dependency lock file
├── eslint.config.js # Linting rules
├── .gitignore # Ignored files in version control
├── dist/ # Build output (auto-generated)
├── node_modules/ # Installed dependencies (auto-generated)
└── README.md # Project documentation (you’re reading it!)

## 🎨 Design & Resources

- **Design & UI Inspiration**: The overall layout, UI structure, and design system are based on templates and best practices from [JS Mastery Pro](https://jsmastery.pro).
