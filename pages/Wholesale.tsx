import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import { PRODUCTS } from '../constants';

const Wholesale: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === 'wholesale') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid passcode. Please contact studio for access.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-stone-50 px-6">
        <div className="max-w-md w-full bg-white p-12 shadow-sm border border-stone-100 text-center">
          <Lock className="mx-auto mb-6 text-stone-300" size={48} />
          <h1 className="font-serif text-3xl mb-2">Wholesale Access</h1>
          <p className="text-stone-500 mb-8 text-sm">Please enter the studio passcode to view our linesheet and place bulk orders.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              placeholder="Enter Passcode"
              className="w-full border border-stone-200 p-3 text-center focus:outline-none focus:border-stone-900 transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <button type="submit" className="w-full bg-stone-900 text-white py-3 text-xs uppercase tracking-widest hover:bg-stone-700 transition-colors">
              Unlock
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-stone-100">
             <p className="text-xs text-stone-400 mb-4">Already on Faire?</p>
             <a href="#" className="block w-full border border-stone-200 py-3 text-xs uppercase tracking-widest hover:border-black transition-colors">
               Shop on Faire
             </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-stone-50 px-6">
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex justify-between items-end mb-12 border-b border-stone-200 pb-6">
          <div>
            <h1 className="font-serif text-4xl mb-2">Wholesale Linesheet</h1>
            <p className="text-stone-500 text-sm">Fall/Winter 2024 Collection</p>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)} 
            className="text-xs uppercase tracking-widest text-red-500 hover:text-red-700"
          >
            Lock Access
          </button>
        </div>

        <div className="bg-white p-8 border border-stone-100 mb-12">
          <h2 className="text-sm uppercase tracking-widest font-bold mb-4">Ordering Terms</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-stone-600">
             <p>Minimum Order: $500 USD</p>
             <p>Lead Time: 4-6 Weeks</p>
             <p>Shipping: Calculated at Invoice</p>
          </div>
        </div>

        {/* Wholesale Grid - Simplified Table View */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-stone-200 text-xs uppercase tracking-widest text-stone-500">
                <th className="pb-4 pl-4">Product</th>
                <th className="pb-4">SKU</th>
                <th className="pb-4">MSRP</th>
                <th className="pb-4">Wholesale</th>
                <th className="pb-4">MOQ</th>
                <th className="pb-4 pr-4">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {PRODUCTS.filter(p => !p.isDigital).map(p => (
                <tr key={p.id} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                  <td className="py-4 pl-4 flex items-center gap-4">
                    <img src={p.image} alt={p.name} className="w-12 h-12 object-cover bg-stone-200" />
                    <span className="font-medium">{p.name}</span>
                  </td>
                  <td className="py-4 text-stone-500">LMN-{p.id.padStart(3, '0')}</td>
                  <td className="py-4 text-stone-500">${p.price}</td>
                  <td className="py-4 font-semibold">${(p.price * 0.5).toFixed(2)}</td>
                  <td className="py-4 text-stone-500">5 units</td>
                  <td className="py-4 pr-4">
                     <button className="text-xs uppercase underline underline-offset-4 hover:text-stone-600">Add to Sheet</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wholesale;
