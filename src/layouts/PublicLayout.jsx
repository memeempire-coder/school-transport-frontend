import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-primary-500 font-semibold">SchoolTransport</Link>
          <nav className="flex items-center gap-3">
            <Link to="/login" className="text-sm text-neutral-700">Log in</Link>
            <Link to="/register" className="ml-2 px-3 py-2 bg-primary-500 text-white rounded">Get Started</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-3xl mx-auto px-4 py-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} SchoolTransport — Built for reliability.
        </div>
      </footer>
    </div>
  )
}
