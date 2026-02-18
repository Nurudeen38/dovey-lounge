# Dovey's Nail Lounge | Luxury Nail Spa

![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![Material UI](https://img.shields.io/badge/MUI-7.3.7-007FFF?logo=mui)

Dovey's Nail Lounge is a premium Single Page Application (SPA) designed for a luxury nail spa located in Dawaki, Abuja. It offers a seamless user experience for browsing services, viewing the gallery, and booking appointments. Built with modern web technologies, this application emphasizes performance, accessibility, and a high-end aesthetic.

## Features

-   **Service Showcase**: Browse a curated list of manicures, pedicures, lash extensions, and beauty treatments.
-   **Image Gallery**: View high-quality images of past work and salon interiors.
-   **Appointment Booking**: Integrated booking context for scheduling appointments.
-   **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop devices.
-   **SEO Optimized**: Uses `react-helmet-async` for meta tag management and search engine visibility.
-   **Form Validation**: Robust contact forms powered by `react-hook-form` and `zod`.
-   **Smooth Animations**: Enhanced user experience with AOS (Animate On Scroll).

## Tech Stack

This project is built using the following technologies:

-   **Framework**: [React](https://react.dev/) (v19) via [Vite](https://vitejs.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**:
    -   [Emotion](https://emotion.sh/) (Styled Components)
    -   [Material UI](https://mui.com/) (Component Library)
-   **Routing**: [React Router DOM](https://reactrouter.com/) (v7)
-   **State Management**: React Context API
-   **Forms**: React Hook Form + Zod validation
-   **Analytics**: Vercel Analytics

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (v18 or higher recommended)
-   npm or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/StartUp-Agency/dovey-spa.git
    cd dovey-spa
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Development

To start the local development server:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

### Linting

To run the linter and check for code quality issues:

```bash
npm run lint
```

## Project Structure

A brief overview of the project's file structure:

```
dovey-spa/
├── public/              # Static public assets
├── src/
│   ├── assets/          # Images, fonts, and other assets
│   ├── components/      # Reusable UI components
│   ├── constants/       # Global constants and configuration data
│   ├── context/         # React Context providers (e.g., BookingContext)
│   ├── layouts/         # Layout components (e.g., MainLayout)
│   ├── pages/           # Page components (Home, Services, etc.)
│   ├── styles/          # Global styles and theme definitions
│   ├── utils/           # Utility functions and helpers
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com). The `vercel.json` file contains the necessary configuration settings.

## License

This project is proprietary and confidential.

---

Designed & Developed for Dovey's Nail Lounge.
