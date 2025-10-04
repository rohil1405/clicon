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
