# 🛒 Clicon eCommerce Website

![Next.js](https://img.shields.io/badge/Next.js-13-blue?logo=next.js&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript&style=for-the-badge)
![React Redux](https://img.shields.io/badge/Redux-React-purple?logo=redux&style=for-the-badge)
![React Query](https://img.shields.io/badge/React_Query-3.39-green?style=for-the-badge)

Clicon is a modern eCommerce web application built with **Next.js** and **TypeScript**, designed to allow users to browse products, view product details, manage a cart, and complete purchases efficiently. This project demonstrates a fully functional shopping experience with advanced features like server-side rendering (SSR) for SEO, state management, and interactive UI components.

---

## 🚀 Features

- **Home Page**: Dynamic landing page showcasing featured products.  
- **Shop / Product Listing Page**: Browse all products with filtering and sorting.  
- **Product Detail Page**: View full product details, images, ratings, and add to cart or favorites.  
- **Cart Page**: Review selected products, quantities, prices, discounts, and totals.  
- **Favorites Page**: View and manage favorite products.  
- **Thank You Page**: Confirmation page after checkout.  
- **404 Page**: Custom page for invalid or unnecessary URLs.  
- **Server-Side Rendering (SSR)** for better **SEO** on product pages.  
- **Interactive UI**:  
  - Product sliders using **React Slick**  
  - Alerts using **SweetAlert2**  
  - Cart and favorites management with **Redux**  
  - Data fetching & caching with **React Query**  
  - Dynamic product tables using **React Table**  

---

## 📁 Project Structure

```text
.
├── pages/                   # Next.js pages
│   ├── index.tsx            # Home Page
│   ├── products/            # Shop / Product Listing Pages
│       ├── [id].tsx         # Product Detail Pages
│   ├── cart.tsx             # Cart Page
│   ├── favourites/          # Favorites Page
│   ├── _document.tsx        # Custom Document
│   ├── thank-you.tsx        # Thank You Page
│   └── 404.tsx              # Custom 404 Page
├── components/              # Reusable React components
├── store/                   # Redux slices & store configuration
├── styles/                  # Global & module CSS/SCSS
├── utils/                   # Data fetching & utility functions
├── models/                  # TypeScript interfaces & models
├── layout/                  # Site layout components
├── hooks/                   # Custom React hooks
└── public/                  # Public assets
    ├── images/              # Shared images & icons
    └── data/                # Static data or feature data

```


## ⚡ Getting Started
Prerequisites

Make sure you have Node.js >=18 installed.

# Install dependencies

npm install

# or

yarn install

# or

npm install

Run Development Server
npm run dev

# or

yarn dev

# or

npm dev

Open http://localhost:3000
in your browser to see the live app.

## 📝 Scripts
Command Description
npm run dev Run Next.js in development mode
npm run build Build production-ready application
npm run start Start the production server
npm run lint Run ESLint to check code for issues

## 🔧 How It Works

Cart Management: Users can add products to the cart, update quantities, and remove items.

Favorites: Add/remove products to a favorites list.

Product Details: Rich product information with images, ratings, and descriptions.

SSR for SEO: Product pages are server-side rendered to improve SEO.

Interactive UI: SweetAlert notifications and sliders improve user experience.

React Query: Handles asynchronous fetching and caching efficiently.

## 🌐 Deployment

Deploy the app easily on Vercel:
Connect your GitHub repository to Vercel.
Configure project settings (framework: Next.js, build command: npm run build).
Vercel automatically deploys your app with SSR and optimized assets.
For more details, check Next.js Deployment Documentation
.

## 💡 Notes

Built with Next.js + TypeScript for scalability.
Redux manages cart and favorites globally across pages.
React Query ensures smooth data fetching without excessive re-renders.
Custom 404 ensures users never see broken pages.
Designed for eCommerce workflows like browsing, selecting, and purchasing products.

## ✨ Contributing

Feel free to fork, submit issues, or make pull requests!
For feature requests or bugs, open an issue in the repository.

## 📜 License

MIT License © 2025
