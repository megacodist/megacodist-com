# `megacodist.com` Source Code

## Tech Stack Requirements

To ensure maximum stability, reproducibility, and performance, this project is carefully tuned to run on a modern, battle‑tested stack. Each component has been chosen to guarantee smooth developer experience and long‑term maintainability.

**Concise:**  
Node.js v24.11.1 + React v19.2.0 + Next.js v16.0.4 + pnpm v10.23.0 + Tailwind v4.1 + daisyUI v5.5.8

**Detailed:**

*   **Runtime:** Node.js `v24.11.1`  
    Provides a fast, reliable JavaScript runtime with cutting‑edge features and security updates.

*   **Package Manager:** pnpm `v10.23.0`  
    A blazing‑fast, disk‑space‑efficient package manager that ensures consistent installs across environments.

*   **UI Library:** React `v19.2.0`  
    The core library for building highly interactive, component‑driven user interfaces with the latest concurrent features.

*   **Framework:** Next.js `v16.0.4`  
    The powerful React framework for building scalable, production‑ready applications with ease.

*   **Styling Engine:** Tailwind CSS `v4.1`  
    A modern, utility‑first CSS engine designed for rapid styling, high performance, and minimal bundle sizes.

*   **Component Kit:** daisyUI `v5.5.8`  
    A comprehensive component library that extends Tailwind CSS to provide semantic class names and faster UI development.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/megacodist/megacodist-com.git
    cd megacodist-com
    ```

2.  **Enable Corepack (Ensures correct pnpm version):**  
    In Windows PowerShell, you might need an elevated shell.

    ```bash
    corepack enable
    ```

3.  **Install dependencies:**

    ```bash
    pnpm install
    ```

    *Note: Do not use `npm install` or `yarn`. This project relies on `pnpm-lock.yaml` for reproducibility.*

4.  **Run the development server:**

    ```bash
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: App Router pages and layouts.
- `src/components`: Reusable UI components (Header, Footer).
- `public`: Static assets.

## Deployment

This project is optimized for deployment on Vercel, Cloudflare Pages, or GitHub Pages.

**Build Command:**

```bash
pnpm build
```
