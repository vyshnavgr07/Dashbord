'use client'
import { useState } from 'react';
import Head from 'next/head';

const SettingsPage = () => {
  
  const [theme, setTheme] = useState('light');
  const [showNotifications, setShowNotifications] = useState(true);
  const [dataFilter, setDataFilter] = useState('all');

  const handleThemeChange = (event) => setTheme(event.target.value);
  const handleNotificationsChange = (event) => setShowNotifications(event.target.checked);
  const handleFilterChange = (event) => setDataFilter(event.target.value);

  const handleSave = () => {

    console.log({ theme, showNotifications, dataFilter });
  };

  return (
    <>
      <Head>
        <title>Settings</title>
        <meta name="description" content="Dashboard settings page" />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Settings</h1>
        
        <div className="mb-4">
          <label className="block text-gray-700">Theme</label>
          <select
            value={theme}
            onChange={handleThemeChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={showNotifications}
              onChange={handleNotificationsChange}
              className="form-checkbox"
            />
            <span className="ml-2 text-gray-700">Show Notifications</span>
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Data Filter</label>
          <select
            value={dataFilter}
            onChange={handleFilterChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Save Settings
        </button>
      </div>
    </>
  );
};

export default SettingsPage;
