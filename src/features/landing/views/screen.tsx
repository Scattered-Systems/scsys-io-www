/**
 * Created At: 2025.05.02:20:28:40
 * @author - @FL03
 * @file - screen.tsx
 */
'use client';
// imports
import * as React from 'react';

export const LandingScreen: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to the Landing Page</h1>
      <p className="mt-4 text-lg">This is a simple landing page example.</p>
    </div>
  );
}