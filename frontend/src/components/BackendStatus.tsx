import React, { useEffect, useState } from 'react';
import { apiService, type HealthResponse } from '../services/api';

type ConnectionState = 'checking' | 'connected' | 'disconnected';

export const BackendStatus: React.FC = () => {
  const [status, setStatus] = useState<ConnectionState>('checking');
  const [details, setDetails] = useState<HealthResponse | null>(null);

  const checkConnection = async () => {
    setStatus('checking');
    try {
      const data = await apiService.getHealth();
      setDetails(data);
      setStatus('connected');
    } catch {
      setStatus('disconnected');
      setDetails(null);
    }
  };

  useEffect(() => {
    checkConnection();
    // Re-check backend status every 30 seconds
    const interval = setInterval(checkConnection, 30000);
    return () => clearInterval(interval);
  }, []);

  if (status === 'checking') {
    return (
      <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs bg-slate-100 text-slate-600 border border-slate-200">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        <span>Checking API...</span>
      </div>
    );
  }

  if (status === 'connected') {
    return (
      <div
        className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs bg-emerald-50 text-emerald-700 border border-emerald-200"
        title={`Service: ${details?.service || 'Healthy'}`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <span className="font-semibold">Backend Live</span>
      </div>
    );
  }

  return (
    <div
      onClick={checkConnection}
      className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs bg-rose-50 text-rose-700 border border-rose-200 cursor-pointer hover:bg-rose-100 transition"
      title="Click to retry connecting to FastAPI"
    >
      <span className="w-2 h-2 rounded-full bg-rose-500" />
      <span className="font-semibold">Backend Offline (Retry)</span>
    </div>
  );
};

export default BackendStatus;