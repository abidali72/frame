# frame ✳︎

A high-fidelity, interactive full-screen landing page for the creative agency **Mainframe**, featuring dynamic mouse/touch-scrub video playback, typewriter animation for A.R.I.A (Adaptive Response Interface Agent), and responsive typography.

🌐 **Live Demo:** [https://6abb71244c95cae1aaceda8d--fastidious-kulfi-00a2da.netlify.app/](https://6abb71244c95cae1aaceda8d--fastidious-kulfi-00a2da.netlify.app/)

---

## ✨ Features

- **Interactive Video Scrubbing:** Smooth mouse-movement and touch-gesture scrubbing that synchronizes video timeline progress directly with user interactions.
- **Adaptive Interface Agent (A.R.I.A):** Realistic typewriter text animation with a custom blinking cursor and blurred backdrop title.
- **Interactive Action Pills:** Quick interaction buttons including direct copy-to-clipboard for contact emails with dynamic checkmark feedback.
- **Responsive Navigation:** Clean desktop navigation bar and a seamless full-screen mobile menu overlay with blur backdrop.
- **Modern Minimalist Aesthetic:** Editorial typography powered by Helvetica Now Display styling and dark mode aesthetic.

---

## 🛠 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Motion](https://motion.dev/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version 18+ recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abidali72/frame.git
   cd frame
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Configure environment variables if utilizing AI capabilities:
   ```bash
   cp .env.example .env.local
   ```
   Add your `GEMINI_API_KEY` in `.env.local`.

### Development

Run the local development server:
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build

To build the project for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```text
frame/
├── assets/                 # Static assets & configurations
├── src/
│   ├── components/
│   │   ├── BackgroundVideo.tsx   # Interactive mouse/touch-scrub video engine
│   │   ├── HeroSection.tsx       # Typewriter greeting and action pills
│   │   └── Navbar.tsx            # Desktop & responsive mobile navigation
│   ├── hooks/
│   │   └── useTypewriter.ts      # Custom hook for character-by-character typing
│   ├── App.tsx                   # Main layout container
│   ├── index.css                 # Base stylesheet and fonts
│   └── main.tsx                  # Application entry point
├── index.html                    # Root HTML template
├── package.json                  # Dependencies & scripts
└── vite.config.ts                # Vite configuration
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
