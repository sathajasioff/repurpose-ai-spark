
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  // In a real app, you would check auth state here
  const isAuthenticated = false;
  
  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <Sparkles className="h-6 w-6 text-brand-600" />
                <span className="ml-2 text-xl font-bold gradient-text">RepurposeAI</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              <Link to="/features" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white px-3 py-2 text-sm font-medium">
                Features
              </Link>
              <Link to="/pricing" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white px-3 py-2 text-sm font-medium">
                Pricing
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            {isAuthenticated ? (
              <div className="flex items-center gap-2">
                <Link to="/dashboard">
                  <Button variant="outline">Dashboard</Button>
                </Link>
                <Link to="/profile">
                  <Button variant="ghost" className="rounded-full w-10 h-10 p-0">
                    <span className="sr-only">User profile</span>
                    <div className="rounded-full bg-brand-200 w-8 h-8 flex items-center justify-center text-brand-700 font-medium">
                      U
                    </div>
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
