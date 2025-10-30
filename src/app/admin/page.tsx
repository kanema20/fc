'use client';

import { useState } from 'react';

interface EmailSignup {
  id: number;
  email: string;
  source: string;
  createdAt: string;
}

export default function AdminPage() {
  const [signups, setSignups] = useState<EmailSignup[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, use proper auth
    if (password === 'cakeshop2025') {
      setIsAuthenticated(true);
      fetchSignups();
    } else {
      alert('Incorrect password');
    }
  };

  const fetchSignups = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/signups');
      if (!response.ok) {
        throw new Error('Failed to fetch signups');
      }
      const data = await response.json();
      setSignups(data.signups);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = () => {
    // Create CSV headers
    const headers = ['ID', 'Email', 'Source', 'Created At'];
    
    // Create CSV rows
    const rows = signups.map((signup) => [
      signup.id,
      signup.email,
      signup.source,
      new Date(signup.createdAt).toLocaleString(),
    ]);

    // Combine headers and rows
    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.join(',')),
    ].join('\n');

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `email-signups-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isAuthenticated) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
        <div className='bg-white rounded-lg shadow-2xl p-8 w-full max-w-md'>
          <h1 className='text-3xl font-bold text-gray-900 mb-6 text-center'>
            Admin Access
          </h1>
          <form onSubmit={handleAuth} className='space-y-4'>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                placeholder='Enter admin password'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
          <p className='text-gray-600'>Loading signups...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='bg-red-50 border border-red-200 rounded-lg p-6 max-w-md'>
          <h2 className='text-red-800 font-semibold mb-2'>Error</h2>
          <p className='text-red-600'>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-50 py-8 px-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-gray-900 mb-2'>
            Admin Dashboard
          </h1>
          <p className='text-gray-600'>
            Email signups from Cakeshop landing page
          </p>
        </div>

        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <div className='px-6 py-4 bg-gray-900 border-b border-gray-200'>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-semibold text-white'>
                Email Signups
              </h2>
              <div className='flex items-center gap-3'>
                <span className='bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium'>
                  {signups.length} total
                </span>
                <button
                  onClick={downloadCSV}
                  disabled={signups.length === 0}
                  className='bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-1 rounded-lg text-sm font-medium transition-colors flex items-center gap-2'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    />
                  </svg>
                  Download CSV
                </button>
              </div>
            </div>
          </div>

          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead className='bg-gray-50 border-b border-gray-200'>
                <tr>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    ID
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Email
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Source
                  </th>
                  <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {signups.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className='px-6 py-8 text-center text-gray-500'
                    >
                      No signups yet
                    </td>
                  </tr>
                ) : (
                  signups.map((signup) => (
                    <tr
                      key={signup.id}
                      className='hover:bg-gray-50 transition-colors'
                    >
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                        {signup.id}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                        {signup.email}
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-600'>
                        <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                          {signup.source}
                        </span>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-600'>
                        {new Date(signup.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className='mt-6 text-center'>
          <button
            onClick={() => {
              setIsAuthenticated(false);
              setPassword('');
            }}
            className='text-sm text-gray-600 hover:text-gray-900 underline'
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

