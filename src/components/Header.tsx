
import React, { useState } from 'react';
import { Bot, IndianRupee } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

const AIPricePredictionDialog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [predictionResult, setPredictionResult] = useState<string | null>(null);

  const handleAIPrediction = async () => {
    setIsLoading(true);
    try {
      // Simulated AI prediction (replace with actual API call in future)
      const aiResponse = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve("Based on current market trends, we predict a potential price range of ₹75,00,000 to ₹85,00,000 for similar properties.");
        }, 1500);
      });
      
      setPredictionResult(aiResponse);
      toast.info("AI Price Prediction Generated", {
        description: aiResponse
      });
    } catch (error) {
      toast.error("Failed to generate AI prediction", {
        description: "Please try again later."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          className="bg-white/10 hover:bg-white/20"
          onClick={handleAIPrediction}
        >
          <Bot className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>AI Price Prediction</DialogTitle>
        </DialogHeader>
        {isLoading ? (
          <div className="flex justify-center items-center py-4">
            <span>Generating AI prediction...</span>
          </div>
        ) : (
          <div className="py-4">
            {predictionResult ? (
              <p className="text-gray-700">{predictionResult}</p>
            ) : (
              <p className="text-gray-500">Click the AI bot to generate a price prediction</p>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

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
            <AIPricePredictionDialog />
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
