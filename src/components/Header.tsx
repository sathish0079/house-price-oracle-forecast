
import React from 'react';

const Header = () => {
  return (
    <header className="py-6 gradient-bg text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold">House Price Oracle</h1>
            <p className="text-sm md:text-base opacity-90">Advanced forecasting using data science</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-md">
              <span className="text-xs font-medium block">POWERED BY</span>
              <span className="font-semibold">Smart Regression AI</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
