# 🚀 PortfolioGenie

<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=26&duration=2500&pause=800&color=22C55E&center=true&vCenter=true&width=720&lines=AI-Powered+Portfolio+Builder;From+Code+to+Career+Brand;Built+by+Digital+Egypt+Pioneers" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-111827?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-Next-111827?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  <img src="https://img.shields.io/badge/AI-Enabled-111827?style=for-the-badge&logo=openai&logoColor=10A37F" />
  <img src="https://img.shields.io/badge/License-MIT-111827?style=for-the-badge" />
</p>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/🚀%20Live%20Demo-Open-2563EB?style=for-the-badge" /></a>
  <a href="#"><img src="https://img.shields.io/badge/🧩%20Architecture-View-10B981?style=for-the-badge" /></a>
  <a href="#"><img src="https://img.shields.io/badge/⚡%20Quick%20Start-Guide-F59E0B?style=for-the-badge" /></a>
</p>

---



> Graduation Project — **Digital Egypt Pioneers Initiative (DEPI)** 🇪🇬

**PortfolioGenie** is a React-based web app that turns your GitHub activity into a polished, recruiter-ready portfolio. It walks you through a guided, multi-step builder — import your GitHub repos, pick the projects you want to showcase, generate an optimized "About Me" and project descriptions, then preview the final result.

<!-- <p align="center">
  <img src="https://img.shields.io/badge/React-19-111827?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-8-111827?style=for-the-badge&logo=vite&logoColor=FFD62E" />
  <img src="https://img.shields.io/badge/Redux%20Toolkit-State-764ABC?style=for-the-badge&logo=redux" />
  <img src="https://img.shields.io/badge/React%20Query-Data-FF4154?style=for-the-badge&logo=reactquery" />
  <img src="https://img.shields.io/badge/License-MIT-111827?style=for-the-badge" />
</p> -->

---

## 🧠 Problem → Solution → Impact

**Problem:** Junior developers often struggle to present their projects in a way that stands out to recruiters.

**Solution:** PortfolioGenie analyzes your GitHub repositories and helps generate optimized project descriptions and a compelling "About Me" section.

**Impact:** Faster portfolio creation, better recruiter visibility, stronger personal branding.

---

## ✨ Features

- 🔗 **GitHub import** — pull profile and repository data with a guided step
- 🤖 **AI-assisted copy** — optimized project descriptions and "About Me" generation (tone-based: Professional, Friendly, Confident, Minimalist)
- 🧭 **Step-by-step builder** — Personal Info → GitHub Import → Projects → About Me → Review
- 👀 **Live preview** — see the final portfolio before you're done
- 🌗 **Dark/Light theme** support via React Context
- ⚡ **Fast dev experience** powered by Vite 8

> ⚠️ **Current status:** GitHub and AI data are currently **mocked**. `src/services/httpClient.js` simulates real REST/AI calls with artificial delays so the app behaves like it's talking to a live backend — this is intentional scaffolding for a future real backend/AI integration (see [Roadmap](#-roadmap)).

---

## 🧩 Architecture

The project follows a **feature-based architecture** on top of a standard React + Vite frontend:

```
Client (React 19 + Vite)
 ├─ Pages            → route-level screens (Home, Builder, Preview, NotFound)
 ├─ Features         → self-contained domains (github, ai, builder, preview)
 │    each feature owns its own api/, hooks/, components/
 ├─ Components       → shared/reusable UI (Button, Input, Select, Navbar, Layout...)
 ├─ Store            → Redux Toolkit (builder state: steps, form data, selections)
 ├─ Services         → mock HTTP client (stand-in for a future real API)
 └─ Context          → Theme (dark/light)

Data flow
 └─ React Query      → fetching/caching for GitHub + AI calls (mutations/queries)
 └─ Redux            → cross-step form state for the builder wizard
```

### Request/data flow
1. `App.jsx` wraps the app in `ReduxProvider`, `QueryClientProvider`, and `ThemeProvider`.
2. `AppRouter.jsx` renders one of 4 pages inside a shared `AppLayout`.
3. On the Builder page, each step reads/writes to the Redux `builder` slice (`currentStep`, `personalInfo`, `githubProfile`, `repos`, `selectedProjects`, `aboutMe`, `tone`).
4. GitHub and AI calls go through React Query hooks (`useGithubProfile`, `useGithubRepos`, `useGenerateAboutMe`, `useOptimizeDescription`), which currently call **mocked** API functions in `features/*/api/*.js`.
5. The Preview page reads the finished state from Redux and renders the portfolio.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19 |
| Build tool | Vite 8 |
| Routing | React Router v7 |
| Global state | Redux Toolkit |
| Data fetching/caching | TanStack React Query v5 |
| Forms | React Hook Form |
| Styling | CSS Modules |
| Linting | oxlint |

---

## 📂 Project Structure

```
src/
├── App.jsx / main.jsx           # App entry, providers setup
├── router/
│   └── AppRouter.jsx             # Route definitions
├── store/
│   └── store.js                  # Redux store configuration
├── services/
│   └── httpClient.js             # Mock HTTP client (GET/POST simulators)
├── context/
│   └── ThemeContext.jsx          # Dark/light theme provider
├── features/
│   ├── github/
│   │   ├── api/githubApi.js      # Mocked GitHub profile/repos
│   │   └── hooks/                # useGithubProfile, useGithubRepos
│   ├── ai/
│   │   ├── api/aiApi.js          # Mocked AI copy generation
│   │   └── hooks/                # useGenerateAboutMe, useOptimizeDescription
│   ├── builder/
│   │   ├── components/           # StepPersonalInfo, StepGithubImport, StepProjects,
│   │   │                         # StepAboutMe, StepReview, StepIndicator
│   │   └── store/builderSlice.js # Redux slice for the builder wizard
│   └── preview/
│       └── components/           # PortfolioPreview, ProjectCard
├── pages/
│   ├── Home/                     # Landing page
│   ├── Builder/                  # Hosts the step wizard
│   ├── Preview/                  # Final portfolio view
│   └── NotFound/
├── components/
│   ├── ui/                       # Button, Input, Select, TextArea, Spinner
│   ├── layout/                   # AppLayout
│   └── Navbar/
├── styles/                       # Global CSS
└── utils/                        # constants.js, helpers.js
```

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/PortfolioGenie.git
cd PortfolioGenie
npm install
npm run dev
```

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint       # run oxlint
```

---

## 🗺️ Roadmap

- [ ] Replace mocked GitHub API with the real GitHub REST API
- [ ] Integrate a real AI provider for description/About Me generation
- [ ] User authentication
- [ ] Export portfolio (PDF / shareable link / static site)
- [ ] Drag & drop portfolio builder
- [ ] Persist drafts (backend or local storage)

---

## 👥 Team

| Name |
|---|
| Mohamed Mabrouk Heshmat | 
| Ibrahim Mohamed Rady | 
| Mohamed Samy Ahmed | 
| Shimaa Bakri Ahmed | 
| Shaimaa Ahmed Mohamed | 
| Shahd Ebrahem Desouqy | 

---

## 📜 License

MIT License
