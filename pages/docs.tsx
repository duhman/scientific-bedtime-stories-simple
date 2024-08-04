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
        <ul className="list-disc list-inside">
          <li>Installation</li>
          <li>Project Structure</li>
          <li>Configuration</li>
          <li>Deployment</li>
        </ul>
      </div>
    </div>
  );
}
