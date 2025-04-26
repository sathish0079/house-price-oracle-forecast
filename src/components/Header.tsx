
import React from 'react';
import { Bot, IndianRupee } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
            <Button 
              variant="ghost" 
              size="icon"
              className="bg-white/10 hover:bg-white/20"
              onClick={() => console.log('AI Assistant clicked')}
            >
              <Bot className="h-5 w-5" />
            </Button>
            <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-md flex items-center gap-2">
              <IndianRupee className="h-4 w-4" />
              <div>
                <span className="text-xs font-medium block">POWERED BY</span>
                <span className="font-semibold">Smart Regression AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
