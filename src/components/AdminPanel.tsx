import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Mail, Phone, MapPin, Calendar, ListFilter, Database, RefreshCw, Eraser } from 'lucide-react';

interface Registration {
  id: number;
  full_name: string;
  email: string;
  phone_number: string;
  age_group: string;
  designation: string;
  location: string;
  program: string;
  created_at: string;
}

export default function AdminPanel() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:8000/api/registrations');
      if (!response.ok) throw new Error('Failed to fetch registrations');
      const data = await response.json();
      setRegistrations(data);
    } catch (err) {
      setError('Could not load data. Make sure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  const filteredData = registrations.filter(reg => 
    reg.full_name.toLowerCase().includes(filter.toLowerCase()) ||
    reg.email.toLowerCase().includes(filter.toLowerCase()) ||
    reg.program.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-3xl font-display font-bold text-slate-900">Admin Dashboard</h1>
            <p className="text-slate-500 mt-1">Manage and view all registered participants.</p>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <ListFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search registrations..." 
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
            </div>
            <button 
              onClick={fetchRegistrations}
              className="px-6 py-2 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-primary/90 transition-all shadow-md"
            >
              Refresh
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Database size={18} className="text-brand-primary" /> Database Maintenance
              </h3>
              <p className="text-sm text-slate-500 mt-1">Update database schema to the latest version.</p>
            </div>
            <a 
              href="https://goreachworld.org/run-migrations" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              Run Migrations <RefreshCw size={14} />
            </a>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 flex items-center gap-2">
                <Eraser size={18} className="text-brand-primary" /> System Cache
              </h3>
              <p className="text-sm text-slate-500 mt-1">Clear config, routes, and view caches.</p>
            </div>
            <a 
              href="https://goreachworld.org/clear-cache" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-200 transition-all flex items-center gap-2"
            >
              Clear Cache <Eraser size={14} />
            </a>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-700 p-6 rounded-2xl border border-red-100 text-center">
            {error}
          </div>
        ) : (
          <div className="grid gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 uppercase text-xs font-bold tracking-wider">
                      <th className="px-6 py-4">Participant</th>
                      <th className="px-6 py-4">Contact</th>
                      <th className="px-6 py-4">Program / Meeting</th>
                      <th className="px-6 py-4">Status / Info</th>
                      <th className="px-6 py-4">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {filteredData.length > 0 ? filteredData.map((reg) => (
                      <motion.tr 
                        key={reg.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="hover:bg-slate-50/50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary font-bold">
                              {reg.full_name.charAt(0)}
                            </div>
                            <div>
                              <div className="font-bold text-slate-900">{reg.full_name}</div>
                              <div className="text-xs text-slate-500">{reg.designation} · {reg.age_group}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Mail size={14} className="text-slate-400" /> {reg.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <Phone size={14} className="text-slate-400" /> {reg.phone_number}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-secondary/10 text-brand-secondary rounded-full text-xs font-bold uppercase">
                            {reg.program}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <MapPin size={14} className="text-slate-400" /> {reg.location}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Calendar size={14} className="text-slate-400" /> 
                            {new Date(reg.created_at).toLocaleDateString()}
                          </div>
                        </td>
                      </motion.tr>
                    )) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                          No registrations found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
