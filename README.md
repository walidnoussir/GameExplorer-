# 🎮 GameExplorer

A modern, responsive React web application for exploring video games, discovering game creators, and browsing developer studios — powered by a games API and built with Vite.

---

## 📸 Preview

> Browse thousands of games, filter by genre or platform, explore creator profiles, and dive into detailed game pages — all in a fast, beautifully styled interface.

---

## 🚀 Features

- 🔍 **Game Discovery** — Browse and search a large catalog of video games
- 🎛️ **Filtering** — Filter games by genre, platform, or other criteria
- 📄 **Game Details** — View in-depth information for each game via a dedicated detail page or popup
- 👤 **Creator Profiles** — Explore game creators with profile pages and tag-based browsing
- 🏢 **Game Developers** — Dedicated page for browsing game development studios
- ⚡ **Fast & Lightweight** — Built with Vite for near-instant dev startup and optimized builds
- 📱 **Responsive Design** — Fully responsive layout powered by Tailwind CSS

---

## 🛠️ Tech Stack

| Technology                                  | Purpose                   |
| ------------------------------------------- | ------------------------- |
| [React 19](https://react.dev/)              | UI library                |
| [Vite](https://vitejs.dev/)                 | Build tool & dev server   |
| [React Router v7](https://reactrouter.com/) | Client-side routing       |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling     |
| [Axios](https://axios-http.com/)            | HTTP requests / API calls |
| [Lucide React](https://lucide.dev/)         | Icon library              |
| [Font Awesome](https://fontawesome.com/)    | Additional icons          |

---

## 📁 Project Structure

```
GameExplorer/
├── public/
│   ├── favicon.svg
│   └── icons.svg
└── src/
    ├── Logos/                        # Brand/logo image assets
    ├── assets/
    │   └── images/                   # Static images (game, rating, review, search)
    ├── components/
    │   ├── Creators/                 # Creator-related components
    │   │   ├── CreatorCard.jsx
    │   │   ├── CreatorImage.jsx
    │   │   ├── CreatorInfo.jsx
    │   │   ├── CreatorList.jsx
    │   │   ├── CreatorProfile.jsx
    │   │   ├── CreatorTag.jsx
    │   │   └── Tag.jsx
    │   ├── games/                    # Game-related components
    │   │   ├── FilterGames.jsx
    │   │   ├── GameCard.jsx
    │   │   └── GamesLists.jsx
    │   ├── ui/                       # Reusable UI primitives
    │   │   ├── Select.jsx
    │   │   └── Spinner.jsx
    │   ├── Logo.jsx
    │   ├── NavBar.jsx
    │   └── Text.jsx
    ├── css/
    │   └── GameDevelopersPage.css
    ├── hooks/
    │   └── useRetreive.js            # Custom data-fetching hook
    ├── pages/
    │   ├── AppLayout.jsx             # Root layout wrapper
    │   ├── HomePage.jsx
    │   ├── GamesPage.jsx
    │   ├── GameDetailsPage.jsx
    │   ├── PopapDetails.jsx          # Game popup detail view
    │   ├── CreatorsPage.jsx
    │   ├── CreatorProfilePage.jsx
    │   └── GameDevelopersPage.jsx
    ├── utilities/
    │   └── utility.js                # Shared helper functions
    ├── App.jsx                       # Route definitions
    ├── main.jsx                      # App entry point
    ├── index.css
    └── Details.css
```

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/GameExplorer.git
   cd GameExplorer
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure your API key**

   This project fetches game data from an external API (e.g., [RAWG Video Games Database](https://rawg.io/apidocs)). Create a `.env` file in the root and add your key:

   ```env
   VITE_API_KEY=your_api_key_here
   VITE_API_BASE_URL=https://api.rawg.io/api
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Available Scripts

| Script            | Description                                |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Start the Vite development server with HMR |
| `npm run build`   | Build the app for production               |
| `npm run preview` | Preview the production build locally       |
| `npm run lint`    | Run ESLint across the project              |

---

## 🗺️ Pages & Routing

| Route           | Page                 | Description                     |
| --------------- | -------------------- | ------------------------------- |
| `/`             | `HomePage`           | Landing page                    |
| `/games`        | `GamesPage`          | Browse & filter all games       |
| `/games/:id`    | `GameDetailsPage`    | Full detail view for a game     |
| `/creators`     | `CreatorsPage`       | List of game creators           |
| `/creators/:id` | `CreatorProfilePage` | Individual creator profile      |
| `/developers`   | `GameDevelopersPage` | Browse game development studios |

---

## 🔧 Custom Hook

### `useRetreive`

Located in `src/hooks/useRetreive.js`, this hook handles data fetching from the API with built-in loading and error state management.

```js
const { data, isLoading, error } = useRetreive(endpoint, params);
```

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- [RAWG Video Games Database API](https://rawg.io/apidocs) — Game data
- [Vite](https://vitejs.dev/) — Blazing fast build tooling
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
