'use client'
import React from 'react';
import Link from 'next/link';
const NotLoggedInComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl mb-4 text-zinc-900">Oops!</h1>
        <p className="text-gray-600 mb-8">Seems like you are not logged in.</p>
        <Link href="/Login" className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default NotLoggedInComponent;
