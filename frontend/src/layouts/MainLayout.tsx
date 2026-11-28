import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import BackendStatus from '../components/BackendStatus';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Header / Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl">🏡</span>
            <div>
              <Link to="/" className="text-lg font-bold text-blue-900 tracking-tight">
                NeighborhoodIQ
              </Link>
              <span className="ml-2 text-[11px] bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded-full">
                Ghaziabad Pilot
              </span>
            </div>
          </div>

          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link to="/" className="text-slate-600 hover:text-blue-600 transition">Dashboard</Link>
            <Link to="/locality/indirapuram" className="text-slate-600 hover:text-blue-600 transition">Locality Profile</Link>
            <Link to="/compare" className="text-slate-600 hover:text-blue-600 transition">Comparison</Link>
            <BackendStatus />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-400">
        <p>© 2026 Neighborhood Quality Score Project • Ghaziabad Pilot Study</p>
      </footer>
    </div>
  );
};