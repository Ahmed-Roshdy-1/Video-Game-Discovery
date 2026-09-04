# 🎮 Video Game Discovery

A modern, responsive web application for browsing and discovering video games, powered by the [RAWG Video Games Database API](https://rawg.io/apidocs). Built with React, TypeScript, and Chakra UI.

![Tech Stack](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat&logo=typescript)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-2-319795?style=flat&logo=chakraui)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite)

---

## ✨ Features

- 🔍 **Search** — Find games instantly by name with a responsive search bar
- 🎨 **Genre Filtering** — Browse games by genre from a sidebar list with icons
- 🕹️ **Platform Filtering** — Filter games by platform (PC, PlayStation, Xbox, etc.)
- 📊 **Sort Options** — Sort results by relevance, date added, name, release date, popularity, or rating
- 🌙 **Dark / Light Mode** — Toggle between themes with a color mode switch
- 💀 **Skeleton Loading** — Smooth skeleton screens while game data is loading
- ⭐ **Ratings Display** — Visual emoji indicators showing critic scores
- 🖼️ **Optimized Images** — Game covers are fetched in the correct crop size from RAWG

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 19](https://react.dev/) |
| Language | [TypeScript 6](https://www.typescriptlang.org/) |
| UI Library | [Chakra UI v2](https://v2.chakra-ui.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| HTTP Client | [Axios](https://axios-http.com/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| API | [RAWG Video Games Database](https://rawg.io/apidocs) |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── NavBar.tsx           # Top navigation with search
│   ├── GameGrid.tsx         # Responsive grid of game cards
│   ├── GameCard.tsx         # Individual game card
│   ├── GameCardSkeleton.tsx # Loading placeholder card
│   ├── GameCardContainer.tsx# Card wrapper with consistent sizing
│   ├── GameHeading.tsx      # Dynamic page heading based on filters
│   ├── GenreList.tsx        # Sidebar genre filter list
│   ├── PlatformSelector.tsx # Platform dropdown menu
│   ├── PlatformIconList.tsx # Platform icons on game cards
│   ├── SortSelector.tsx     # Sort order dropdown menu
│   ├── ColorModeSwitch.tsx  # Dark/light mode toggle
│   ├── Emoji.tsx            # Rating emoji icons
│   └── SearchInput.tsx      # Search bar component
├── hooks/
│   ├── useData.ts           # Generic data-fetching hook
│   ├── useGame.ts           # Hook for fetching games list
│   ├── useGenres.ts         # Hook for fetching genres
│   └── usePlatforms.ts      # Hook for fetching platforms
├── services/
│   ├── api-client.ts        # Axios instance configured for RAWG API
│   └── image-url.ts         # Utility for cropped RAWG image URLs
├── data/
│   └── genres.ts            # Static genre data (used as fallback)
├── App.tsx                  # Root component with layout and state
├── theme.ts                 # Chakra UI custom theme config
└── main.tsx                 # Application entry point
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- A free [RAWG API key](https://rawg.io/login?forward=developer)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ahmed-Roshdy-1/Video-Game-Discovery.git
   cd Video-Game-Discovery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure your API key**

   Open `src/services/api-client.ts` and replace the key with your own:
   ```ts
   export default axios.create({
     baseURL: "https://api.rawg.io/api",
     params: {
       key: "YOUR_RAWG_API_KEY",
     },
   });
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server with HMR |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

---

## 🙏 Acknowledgements

- Game data provided by the [RAWG Video Games Database API](https://rawg.io/apidocs)
- UI components by [Chakra UI](https://v2.chakra-ui.com/)
- Inspired by [Mosh Hamedani's](https://codewithmosh.com/) React course
