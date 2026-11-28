import React from 'react';
import { Link } from 'react-router-dom';

export const Comparison: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-xs border border-slate-200">
      <div className="flex items-center space-x-2 text-sm text-slate-500 mb-2">
        <Link to="/" className="text-blue-600 hover:underline">Dashboard</Link>
        <span>/</span>
        <span>Comparison</span>
      </div>
      <h1 className="text-2xl font-bold text-slate-900">Locality Comparison Tool</h1>
      <p className="text-slate-500 mt-2 text-sm">
        Placeholder: Side-by-side indicator analysis for two or more localities will be rendered here.
      </p>
    </div>
  );
};