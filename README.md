# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# 🎬 Movie App

A modern React + Vite web application that allows users to browse, search, and explore movies.  
It’s designed with a responsive UI and powered by dynamic API data fetching using Axios.

---

## 🚀 Features

- 🎥 **Browse Movies** — Explore a wide range of movies with titles, posters, and descriptions.
- 🔍 **Search Functionality** — Quickly find movies by title or keyword.
- 🧭 **Dynamic Routing** — Seamless page navigation using React Router.
- ⚡ **Fast Build** — Built with Vite for blazing-fast development and optimized production builds.
- 📱 **Responsive Design** — Works smoothly across desktop and mobile devices.
- 🧩 **Reusable Components** — Modular React components for easy scalability.
- 🎨 **Icons & Styling** — Styled with React Icons and CSS for a modern look.

---

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React 19, Vite 7 |
| **Routing** | React Router DOM 7 |
| **HTTP Client** | Axios |
| **Icons** | React Icons |
| **Linting** | ESLint |
| **Deployment** | Render (Static Site Hosting) |

---

## ⚙️ Installation and Setup

Follow these steps to run the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/GattiHarishKumar/movie-app.git

# 2️⃣ Navigate into the project folder
cd movie-app

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev
````

Once the app is running, open your browser and go to:
👉 **[http://localhost:5173/](http://localhost:5173/)** (default Vite port)

---

## 🧱 Build for Production

To build the optimized production version:

```bash
npm run build
```

This will create a `dist/` folder containing static files ready to deploy.

You can preview the production build locally with:

```bash
npm run preview
```

---

## 🌐 Deployment (Render)

The app can be easily deployed on [Render](https://render.com):

**Render Settings**

| Setting               | Value                          |
| --------------------- | ------------------------------ |
| **Build Command**     | `npm install && npm run build` |
| **Publish Directory** | `dist`                         |
| **Root Directory**    | *(leave blank)*                |

The deployed site is live at:
🔗 **[https://your-app-name.onrender.com](https://your-app-name.onrender.com)**

---

## 📁 Project Structure

```
movie-app/
 ┣ src/
 ┃ ┣ components/      # Reusable React components
 ┃ ┣ pages/           # Route-level components (Home, Movie Details, etc.)
 ┃ ┣ assets/          # Images and static files
 ┃ ┣ App.jsx          # Root component
 ┃ ┗ main.jsx         # Entry point
 ┣ public/
 ┣ package.json
 ┣ vite.config.js
 ┗ README.md
```
---

## 🧠 Learnings

This project helped in understanding:

* Efficient **component-based architecture** in React
* **API integration** using Axios
* **Routing and navigation** with React Router
* Deploying a **Vite React app** on Render

---

## 🤝 Contributing

Contributions are always welcome!

If you'd like to contribute:

1. Fork this repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes.
4. Open a Pull Request.

---


## 👨‍💻 Author

**Harish Kumar Gatti**
💼 [GitHub Profile](https://github.com/GattiHarishKumar)

---

