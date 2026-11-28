import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const LocalityProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="bg-white p-8 rounded-xl shadow-xs border border-slate-200">
      <div className="flex items-center space-x-2 text-sm text-slate-500 mb-2">
        <Link to="/" className="text-blue-600 hover:underline">Dashboard</Link>
        <span>/</span>
        <span className="capitalize">{id || 'Locality'}</span>
      </div>
      <h1 className="text-2xl font-bold capitalize text-slate-900">
        Locality Profile: {id || 'Selected Area'}
      </h1>
      <p className="text-slate-500 mt-2 text-sm">
        Placeholder: Granular facility maps, historical trends, and audit breakdowns will be rendered here.
      </p>
    </div>
  );
};