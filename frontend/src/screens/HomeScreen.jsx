import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1562292236-03a612342767?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjAyOXwwfDF8c2VhY2h8Mnx8Y2hhbGxlbmd8ZW58MHx8fHwxNjY5NTMyMjEx&ixlib=rb-1.2.1&q=80&w=1080"
          alt="Pharmacy Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50 transform scale-105 hover:scale-100 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl font-extrabold text-white mb-6 tracking-tight">
            Welcome to <span className="text-yellow-500">MediCart</span>
          </h1>
          <p className="text-2xl text-gray-200 mb-12 font-light">
            Your trusted pharmacy platform for easy access to medicines and health products.
          </p>
          <Link
            to="/register"
            className="inline-block bg-yellow-500 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:bg-yellow-600 transform hover:-translate-y-1 transition duration-300 ease-in-out"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="relative bg-black py-24 px-6 sm:px-10 lg:px-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3769081/pexels-photo-3769081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

        <div className="relative max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tight">
            Quality Medicines & Health Products <span className="text-yellow-500">Delivered to You</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Browse through a wide range of pharmaceutical products and get them delivered straight to your door.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "https://images.pexels.com/photos/1174103/pexels-photo-1174103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/1630714/pexels-photo-1630714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/4551089/pexels-photo-4551089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/5702557/pexels-photo-5702557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/3772512/pexels-photo-3772512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            "https://images.pexels.com/photos/5279628/pexels-photo-5279628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          ].map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 hover:border-yellow-500/50 transform hover:scale-105 transition duration-500 ease-in-out"
            >
              <img
                src={image}
                alt={`Pharmacy Image ${index + 1}`}
                className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition duration-500"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white opacity-90 group-hover:opacity-100 transition duration-300">
                  Health Essentials
                </h3>
                <p className="text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Your go-to place for all your health needs.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="relative bg-black py-24 px-6 sm:px-10 lg:px-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3952273/pexels-photo-3952273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

        <div className="relative max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-6 tracking-tight">
            Our <span className="text-yellow-500">Powerful</span> Features
          </h2>
          <p className="text-xl text-gray-300 font-light">
            Discover features that make MediCart your ideal online pharmacy.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Order Medicines",
              desc: "Easily order prescription and over-the-counter medications.",
              icon: "💊",
            },
            {
              title: "Track Your Orders",
              desc: "Real-time tracking of your pharmacy orders.",
              icon: "📦",
            },
            {
              title: "Health Consultations",
              desc: "Consult with certified pharmacists for advice.",
              icon: "🩺",
            },
            {
              title: "Prescription Upload",
              desc: "Upload prescriptions for quick processing.",
              icon: "📄",
            },
            {
              title: "Secure Payments",
              desc: "Fast and secure payment options for your convenience.",
              icon: "💳",
            },
            {
              title: "Fast Delivery",
              desc: "Get your medications delivered right to your doorstep.",
              icon: "🚚",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-white/10 hover:border-yellow-500/50 transform hover:scale-105 hover:bg-white/10 transition duration-500 ease-in-out"
            >
              <div className="flex items-center justify-center text-6xl group-hover:scale-110 transition duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mt-6 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 font-light leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative bg-black py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/10 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Your Medicines?
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light">
            Join MediCart today and get your prescriptions and medications delivered at your convenience.
          </p>
          <Link
            to="/register"
            className="inline-block bg-yellow-500 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:bg-yellow-600 transform hover:-translate-y-1 transition duration-300 ease-in-out"
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
