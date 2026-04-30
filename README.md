🛒 Ecommerce React Project – Instruction Document
🚀 1. Run the Project (Development Mode)

To start the project locally:
npm install
npm run dev

👉 App will run at:
https://krishna-amudha.github.io/ecommerce

⚛️ 2. Functional Components

This project is built using React Functional Components only.

No class components used
Uses Hooks like:
 useState
 useEffect
 useSelector
 useDispatch

🌐 3. React Router DOM

Routing is handled using:

React Router DOM

Features used:
  Nested routes
  Dynamic routes
  Layout-based routing

Example structure:

<Route path="/" element={<MainLayout />}>
  <Route index element={<Home />} />
  <Route path="products" element={<Products />} />
</Route>

🧩 4. Redux State Management

State management is handled using:

Redux Toolkit

Used for:
  Cart management
  Theme (light/dark)
  Global state handling


🧱 5. Outlet (Child Routing)

Used Outlet for layout-based routing:

import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

🔍 6. Search Filter (Topbar)
Search bar is placed in Top Navigation
Filters products dynamically
Uses useState + Redux filtering logic


📦 7. Category-wise Filtering
Products filtered by category
Example:
Electronics
Fashion
Home appliances

Filtering logic applied using Redux selectors.


⚠️ 8. Error Handling

Handled using:

Try/catch blocks
Conditional rendering

Example:
if (!products) {
  return <p>Something went wrong</p>;
}

⏳ 9. Loading State

Loading UI shown while fetching data:
if (loading) {
  return <h2>Loading...</h2>;
}
Can be improved with spinner UI.

♻️ 10. Reusable Components

Project uses reusable components like:

ProductCard
Button
Navbar
Footer
Loader
Input fields

👉 This helps reduce code duplication and improves maintainability.


📁 Project Structure (Recommended)

src/
│
├── components/
├── pages/
├── layouts/
├── redux/
├── assets/
└── App.jsx

🚀 Summary

This project demonstrates:

React functional architecture
Redux state management
Router DOM nested routing
Search & category filtering
Reusable UI components
Basic error + loading handling