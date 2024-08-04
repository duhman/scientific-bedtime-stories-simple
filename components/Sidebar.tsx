import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
  return (
    <nav className="w-64 bg-gray-100 p-4 h-screen" aria-label="Main Navigation">
      <h2 className="text-xl font-bold mb-4">Navigation</h2>
      <ul>
        <li><Link href="/" className="block py-2 hover:text-blue-600" aria-label="Home">Home</Link></li>
        <li><Link href="/about" className="block py-2 hover:text-blue-600" aria-label="About">About</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;