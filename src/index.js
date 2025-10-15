import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AuthProvider } from "./context/AuthContext/provider";
import { ProductProvider } from "./context/ProductContext/provider";
import { ToastContainer } from "./components/Toaster";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <ToastContainer />
        <App />
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
