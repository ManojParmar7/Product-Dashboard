# 🛍️ Product Management Dashboard

A **React-based Product Management Dashboard** built using **Create React App**, **Context API**, and **Tailwind CSS**.  
It allows you to **manage products** with full **CRUD functionality**, **search**, **filtering**, and **pagination** in a clean, responsive, and user-friendly UI.

**🌐 Live Demo:** [https://product-dashboard-3enq.onrender.com/](https://product-dashboard-3enq.onrender.com/)

---

## 🧩 Table of Contents

1. [Features](#features)
2. [Reusable Components](#reusable-components)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
5. [Available Scripts](#available-scripts)
6. [Context API](#context-api)
7. [API Integration](#api-integration)
8. [Technologies Used](#technologies-used)
9. [Future Improvements](#future-improvements)

---

## 🚀 Features

### 🧱 CRUD Operations

- Create, view, edit, and delete products.
- Default product image if none provided.
- SweetAlert2 confirmation for delete action.
- Toast notifications for success/error messages.

### 📊 Product Table

- Displays: `Title`, `Price`, `Category`, `Description`, `Image`.
- Actions: **View**, **Edit**, **Delete**.
- Pagination (5 items per page).
- Skeleton Loader while fetching data.

### 🔍 Search & Filter

- Search by product title.
- Filter dynamically by category.
- Reset option to clear search and filters.

### 🪟 Responsive Modals

- Create/Edit modal (`ProductModal`).
- View modal (`ProductViewModal`).
- Generic `Modal` component with customizable size.

### ⚙️ State Management

- **Context API** for global state management.
- Centralized `ProductContext` and `AuthContext`.
- Reducer handles all major actions like:
  - `ADD_PRODUCT`
  - `UPDATE_PRODUCT`
  - `DELETE_PRODUCT`
  - `SET_PRODUCTS`

---

## 🧱 Reusable Components

This project focuses on **component reusability** and **UI modularity**.  
Below are key reusable components used across the dashboard:

| Component                 | Description                                                     |
| ------------------------- | --------------------------------------------------------------- |
| **Button.js**             | Custom button component for consistent UI and actions.          |
| **Card.js**               | Used to display product summaries or highlights.                |
| **Carousel.js**           | Reusable image slider for banners or featured products.         |
| **Modal.js**              | Generic modal container used by Create/Edit/View modals.        |
| **Input.js**              | Reusable form input with validation styling.                    |
| **Select.js**             | Dropdown selection component used in filters and forms.         |
| **Pagination.js**         | Dynamic pagination component (supports any list).               |
| **Table.js**              | Displays dynamic data like product list in a structured format. |
| **Toaster.js**            | Custom toast/notification handler for user feedback.            |
| **SkeletonLoader.js**     | Placeholder loader during data fetching.                        |
| **ErrorBoundary.js**      | Catches and displays fallback UI on component errors.           |
| **Navbar.js / Footer.js** | Shared layout components for all pages.                         |

All components are stored inside `src/components/` and are designed for **reusability**, **scalability**, and **maintainability**.

---

## 📂 Project Structure

├── public/
│ └── index.html
├── src/
│ ├── api/
│ │ ├── axiosInstance.js
│ │ └── productApi.js
│ ├── components/
│ │ ├── Button.js
│ │ ├── Card.js
│ │ ├── Carousel.js
│ │ ├── Footer.js
│ │ ├── Navbar.js
│ │ ├── Modal.js
│ │ ├── Select.js
│ │ ├── Pagination.js
│ │ ├── Table.js
│ │ ├── Toaster.js
│ │ └── SkeletonLoader.js
│ ├── context/
│ │ ├── AuthContext/
│ │ └── ProductContext/
│ ├── pages/
│ │ ├── Auth/
│ │ │ ├── Login.js
│ │ │ └── SignUp.js
│ │ ├── Product/
│ │ │ ├── ProductPage.js
│ │ │ ├── Form.js
│ │ │ └── View.js
│ │ └── LandingPage.js
│ ├── App.js
│ └── index.js
├── package.json
└── README.md

---

## 🏁 Getting Started

### 1️⃣ Clone Repository

```bash
git clone https://github.com/ManojParmar7/Product-Dashboard.git
cd REACT-PRODUCT-DASHBOARD
```
