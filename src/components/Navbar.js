import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext/provider";
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";
import Assets from "./Assets/assets";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const loginClass =
    location.pathname === "/signup"
      ? "px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
      : location.pathname === "/"
      ? "px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
      : "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200";

  const signupClass =
    location.pathname === "/login"
      ? "px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
      : location.pathname === "/"
      ? "px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-200"
      : "px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200";

  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        bg-white/95 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.08)] border-b border-gray-100`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <Link to="/">
            <img
              src={Assets.Logo}
              alt="Logo"
              onClick={() => window.location.reload()}
              className="w-32 md:w-36"
            />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {user ? (
            <Link
              to="/products"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Products
            </Link>
          ) : (
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
          )}
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
              <Link to="/login" className={loginClass}>
                Login
              </Link>
              <Link to="/signup" className={signupClass}>
                Sign Up
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <UserCircleIcon className="w-6 h-6 text-gray-700" />
              <span className="font-semibold text-gray-800">
                {user.username}
              </span>
              <Button variant="danger" size="md" onClick={logout}>
                Logout
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            {menuOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {/* Mobile Sidebar */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white/95 backdrop-blur-sm border border-gray-200 shadow-lg rounded-l-xl transform
    ${
      menuOpen ? "translate-x-0" : "translate-x-full"
    } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 hover:text-red-500"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <ul className="flex flex-col gap-6 p-6 bg-white/95 backdrop-blur-sm">
          {user && (
            <li className="flex items-center gap-2 text-gray-800">
              <UserCircleIcon className="w-5 h-5" />
              <span className="font-medium">{user.username}</span>
            </li>
          )}
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block text-gray-700 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
          </li>
          {user && (
            <li>
              <Link
                to="/products"
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Products
              </Link>
            </li>
          )}
          {!user ? (
            <>
              <li>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-700 hover:text-blue-600 font-medium"
                >
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Button
                variant="danger"
                size="md"
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
              >
                Logout
              </Button>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}
