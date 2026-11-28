import React, { useState } from 'react';
import type { Locality } from '../types/locality';

// Mock data strictly labeled for layout demonstration
const PILOT_LOCALITIES: Locality[] = [
  {
    id: 'indirapuram',
    name: 'Indirapuram',
    overallScore: 78,
    dataCoverage: 88,
    confidenceGrade: 'High',
    isSampleData: true,
    categories: [
      { name: 'Environment', score: 65, weight: '25%', icon: '🍃' },
      { name: 'Safety', score: 82, weight: '25%', icon: '🛡️' },
      { name: 'Infrastructure', score: 85, weight: '30%', icon: '🏗️' },
      { name: 'Access / Transit', score: 80, weight: '20%', icon: '🚇' },
    ]
  },
  {
    id: 'vaishali',
    name: 'Vaishali',
    overallScore: 82,
    dataCoverage: 92,
    confidenceGrade: 'High',
    isSampleData: true,
    categories: [
      { name: 'Environment', score: 70, weight: '25%', icon: '🍃' },
      { name: 'Safety', score: 84, weight: '25%', icon: '🛡️' },
      { name: 'Infrastructure', score: 86, weight: '30%', icon: '🏗️' },
      { name: 'Access / Transit', score: 90, weight: '20%', icon: '🚇' },
    ]
  },
  {
    id: 'vasundhara',
    name: 'Vasundhara',
    overallScore: 75,
    dataCoverage: 84,
    confidenceGrade: 'Medium',
    isSampleData: true,
    categories: [
      { name: 'Environment', score: 68, weight: '25%', icon: '🍃' },
      { name: 'Safety', score: 80, weight: '25%', icon: '🛡️' },
      { name: 'Infrastructure', score: 76, weight: '30%', icon: '🏗️' },
      { name: 'Access / Transit', score: 75, weight: '20%', icon: '🚇' },
    ]
  },
  {
    id: 'pratap-vihar',
    name: 'Pratap Vihar',
    overallScore: 69,
    dataCoverage: 78,
    confidenceGrade: 'Medium',
    isSampleData: true,
    categories: [
      { name: 'Environment', score: 64, weight: '25%', icon: '🍃' },
      { name: 'Safety', score: 71, weight: '25%', icon: '🛡️' },
      { name: 'Infrastructure', score: 73, weight: '30%', icon: '🏗️' },
      { name: 'Access / Transit', score: 68, weight: '20%', icon: '🚇' },
    ]
  },
  {
    id: 'mohan-nagar',
    name: 'Mohan Nagar',
    overallScore: 74,
    dataCoverage: 83,
    confidenceGrade: 'Medium',
    isSampleData: true,
    categories: [
      { name: 'Environment', score: 63, weight: '25%', icon: '🍃' },
      { name: 'Safety', score: 76, weight: '25%', icon: '🛡️' },
      { name: 'Infrastructure', score: 78, weight: '30%', icon: '🏗️' },
      { name: 'Access / Transit', score: 85, weight: '20%', icon: '🚇' },
    ]
  }
];

export const Dashboard: React.FC = () => {
  const [selected, setSelected] = useState<Locality>(PILOT_LOCALITIES[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = PILOT_LOCALITIES.filter(l =>
    l.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Sample Data Disclaimer */}
      <div className="bg-amber-50 border-l-4 border-amber-500 p-3 rounded-r-md text-xs text-amber-800 font-medium">
        ⚠️ <strong>Wireframe Mode:</strong> All metrics, category breakdowns, and confidence values are mock data for UI testing.
      </div>

      {/* 1. Header & Search Bar */}
      <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-200">
        <h1 className="text-xl font-bold text-slate-900">Neighborhood Quality Scorecard</h1>
        <p className="text-slate-500 text-xs mt-1">Select or search a Ghaziabad pilot locality:</p>

        <div className="mt-4 max-w-md">
          <input
            type="text"
            placeholder="Search locality (e.g. Vaishali, Indirapuram)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
          />
        </div>

        {/* 2. Five Ghaziabad Localities Buttons */}
        <div className="flex flex-wrap gap-2 mt-4">
          {filtered.map(locality => (
            <button
              key={locality.id}
              onClick={() => setSelected(locality)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selected.id === locality.id
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {locality.name}
            </button>
          ))}
        </div>
      </div>

      {/* Score and Breakdown Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 3. Overall Quality Score Area */}
        <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-200 flex flex-col items-center justify-center text-center">
          <span className="text-xs uppercase font-bold tracking-wider text-slate-400">Quality Score</span>
          <h2 className="text-lg font-bold text-slate-800 mt-1">{selected.name}</h2>
          
          <div className="my-5 w-28 h-28 rounded-full border-4 border-blue-500 flex flex-col items-center justify-center bg-blue-50">
            <span className="text-3xl font-extrabold text-blue-700">{selected.overallScore}</span>
            <span className="text-[10px] text-slate-500 uppercase">out of 100</span>
          </div>

          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
            {selected.confidenceGrade} Reliability
          </span>
          <span className="text-[10px] text-slate-400 mt-2">*Simulated Mock Value</span>
        </div>

        {/* 4. Category Breakdown */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-xs border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-800 mb-4">Category Breakdown</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {selected.categories.map(cat => (
              <div key={cat.name} className="p-4 rounded-lg border border-slate-100 bg-slate-50">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="flex items-center space-x-1.5">
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                  </span>
                  <span className="font-bold text-slate-900">{cat.score}/100</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${cat.score}%` }} />
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">Weight: {cat.weight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map and Data Coverage Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 5. Map Placeholder */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-xs border border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-slate-800">Locality Map & Boundaries</h3>
            <span className="text-xs text-slate-400">GIS Layer: OpenStreetMap</span>
          </div>
          <div className="w-full h-64 bg-slate-100 rounded-lg border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400">
            <span className="text-4xl mb-2">🗺️</span>
            <p className="font-medium text-sm text-slate-600">Map Component Placeholder</p>
            <p className="text-xs text-slate-400 mt-1">Leaflet / MapLibre GL Integration in Phase 2</p>
            <span className="mt-3 text-[11px] bg-white px-2.5 py-1 rounded shadow-xs text-slate-500">
              Active Focus: {selected.name}, Ghaziabad
            </span>
          </div>
        </div>

        {/* 6. Data Coverage / Confidence Section */}
        <div className="bg-white p-6 rounded-xl shadow-xs border border-slate-200 flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-semibold text-slate-800">Data Coverage</h3>
            <p className="text-xs text-slate-500 mt-1">Audited datasets supporting this locality score:</p>
            
            <div className="mt-5 space-y-3">
              <div>
                <div className="flex justify-between text-xs font-medium text-slate-600 mb-1">
                  <span>Coverage Completeness</span>
                  <span>{selected.dataCoverage}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${selected.dataCoverage}%` }} />
                </div>
              </div>

              <div className="flex justify-between text-xs py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Confidence Tier:</span>
                <span className="font-bold text-emerald-700">{selected.confidenceGrade}</span>
              </div>
              <div className="flex justify-between text-xs py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Active Data Feeds:</span>
                <span className="font-medium text-slate-700">6 of 7 Verified</span>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-blue-900 bg-blue-50 p-2.5 rounded-lg mt-4 leading-normal">
            ℹ️ Confidence is higher when points of interest are verified against official government registries (UDISE+, ABDM).
          </p>
        </div>
      </div>
    </div>
  );
};