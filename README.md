# LUMEN Studio

**LUMEN Studio** is a premium, future-luxe ecommerce web application designed for a high-end jewellery and design studio. It features a minimalist, editorial aesthetic that bridges the gap between ancient craft and future technology.

![LUMEN Studio Banner](https://picsum.photos/id/111/1200/400)

## 🌟 Features

*   **Future-Luxe Aesthetic:** A clean, minimal, and typography-driven design using Tailwind CSS.
*   **Mobile-First Responsiveness:** Fully optimized layout for seamless experiences across all devices.
*   **Dynamic Product Catalog:** Filterable shop page separating Jewellery, Homewares, Accessories, Couture, and Digital Files.
*   **Gated Wholesale Portal:** A password-protected area for bulk buyers (Access Code: `wholesale`).
*   **Editorial Storytelling:** Immersive, scroll-based "Intervention Jacket" editorial page.
*   **Workshop Integration:** dedicated section for studio workshops with Eventbrite integration.
*   **Digital Asset Delivery:** External linking logic for 3D printable files (Cults3D).

## 🛠 Tech Stack

*   **Frontend Library:** React 19 (Functional Components, Hooks)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (CDN/Utility classes)
*   **Routing:** React Router DOM (HashRouter)
*   **Icons:** Lucide React
*   **Fonts:** Cormorant Garamond (Serif) & Inter (Sans-serif)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   **Node.js** (v16 or higher)
*   **npm** (v7 or higher) or **yarn**

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/lumen-studio.git
    cd lumen-studio
    ```

2.  **Install Dependencies**
    If you are setting this up with a bundler like **Vite** (recommended):
    ```bash
    npm install
    ```

### Running Development Server

To start the local development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port specified by your terminal) to view it in the browser.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📂 Project Structure

```
lumen-studio/
├── components/          # Reusable UI components
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── Navbar.tsx
│   └── ProductCard.tsx
├── pages/               # Page components matched to routes
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Editorial.tsx    # Intervention Jacket Page
│   ├── Home.tsx
│   ├── Shop.tsx
│   ├── Wholesale.tsx
│   └── Workshops.tsx
├── constants.ts         # Mock data (Products, Workshops)
├── types.ts             # TypeScript interfaces and enums
├── App.tsx              # Main application router
├── index.tsx            # Entry point
└── index.html           # HTML template
```

## 🔐 Wholesale Access

The wholesale section is protected to demonstrate gated content functionality.
*   **URL:** `/wholesale`
*   **Passcode:** `wholesale`

## 🎨 Customization

### Colors & Fonts
Configuration is located in `index.html` within the Tailwind config script and Google Fonts links.
*   **Primary Font:** Inter
*   **Display Font:** Cormorant Garamond
*   **Primary Color:** Stone-900 (Black equivalent)
*   **Background:** Stone-50 (Off-white)

### Data
Product and workshop data is currently static and located in `constants.ts`. To connect to a real backend (e.g., Firebase or Square API), replace these constants with API fetch calls.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
