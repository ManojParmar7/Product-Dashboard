import React, { useContext } from "react";
import ImageCarousel from "../components/Carousel";
import Button from "../components/Button";
import { AuthContext } from "../context/AuthContext/provider";
import { FaShippingFast, FaLock, FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Assets from "../components/Assets/assets";
import ProductCard from "../components/Card";

const LandingPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (!user) {
      navigate("/signup");
      window.scrollTo(0, 0);
    }
  };

  const products = [
    {
      id: 1,
      name: "Espresso Roast",
      price: 150.0,
      description: "Rich and bold espresso coffee beans for a strong cup.",
      image: Assets.Coffee1,
      rating: 400.5,
    },
    {
      id: 2,
      name: "French Roast",
      price: 180.0,
      description: "Dark roasted coffee with a smoky flavor and bold finish.",
      image: Assets.Coffee2,
      rating: 4,
    },
    {
      id: 3,
      name: "Colombian Blend",
      price: 120.5,
      description: "Smooth medium roast with a balanced and sweet flavor.",
      image: Assets.Coffee7,
      rating: 3.5,
    },
    {
      id: 4,
      name: "Morning Brew",
      price: 100.0,
      description:
        "Light roast coffee perfect for a refreshing start to your day.",
      image: Assets.Coffee8,
      rating: 5,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col mt-[4.75rem]">
      <main className="flex-grow">
        <section className="w-full">
          <ImageCarousel />
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <FaShippingFast className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  Quick and reliable shipping for all your products.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <FaLock className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Secure Platform</h3>
                <p className="text-gray-600">
                  Your data and transactions are protected at all times.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <FaChartLine className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-semibold text-xl mb-2">Analytics</h3>
                <p className="text-gray-600">
                  Real-time analytics to make data-driven decisions easily.
                </p>
              </div>
            </div>
          </div>
        </section>

        {!user && (
          <section className="py-20 bg-white flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-gray-600 mb-10 max-w-xl">
              Join thousands of sellers already managing their products
              efficiently. Sign up or login to get started!
            </p>
            <Button
              color="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4"
              className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={handleGetStarted}
            >
              Get Started Now
            </Button>
          </section>
        )}

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((prod) => (
                <div
                  key={prod.id}
                  onClick={() => {
                    if (user) {
                      navigate(`/products`);
                    } else {
                      navigate("/signup");
                    }
                    window.scrollTo(0, 0);
                  }}
                  className="cursor-pointer"
                >
                  <ProductCard product={prod} user={user} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
