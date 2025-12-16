import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-9xl font-CaskaydiaSemiBold text-accent mb-4">404</h1>
      <h2 className="text-3xl md:text-4xl text-white font-medium mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="text-lg px-4 py-2 flex items-center text-accent border border-accent rounded-full cursor-pointer hover:bg-accent hover:text-white hover:shadow-xl transition-all duration-500 ease-in-out"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
