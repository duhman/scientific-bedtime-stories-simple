import Head from 'next/head';
import React from 'react';

export default function Docs() {
  return (
    <div>
      <Head>
        <title>Documentation - Next.js Starter Kit</title>
        <meta name="description" content="Documentation for the Next.js Starter Kit" />
      </Head>

      <h1 className="text-4xl font-bold mb-6">Documentation</h1>
      <p className="text-xl mb-4">Learn how to use and customize this Next.js Starter Kit.</p>
      
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="#installation" className="text-blue-600 hover:underline">Installation</a></li>
          <li><a href="#project-structure" className="text-blue-600 hover:underline">Project Structure</a></li>
          <li><a href="#configuration" className="text-blue-600 hover:underline">Configuration</a></li>
          <li><a href="#deployment" className="text-blue-600 hover:underline">Deployment</a></li>
        </ul>
      </div>
    </div>
  );
}