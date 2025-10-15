import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Products from "./pages/Product/ProductPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthContext } from "./context/AuthContext/provider";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex flex-col">
      <ErrorBoundary>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="/products" /> : <LandingPage />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/products" /> : <Login />}
            />
            <Route
              path="/signup"
              element={user ? <Navigate to="/products" /> : <SignUp />}
            />
            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />
            <Route
              path="*"
              element={user ? <Navigate to="/products" /> : <Navigate to="/" />}
            />
          </Routes>
          <Footer />
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
