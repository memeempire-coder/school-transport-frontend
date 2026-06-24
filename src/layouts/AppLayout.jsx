import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/slices/authSlice.js'

export default function AppLayout() {
  const dispatch = useDispatch()
  const user = useSelector((s) => s.auth.user)

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-3xl mx-auto px-4">
        <header className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <Link to="/app" className="font-semibold text-primary-500">SchoolTransport</Link>
            <nav className="flex gap-2 text-sm text-neutral-600">
              <Link to="/app/parent">Parent</Link>
              <Link to="/app/driver">Driver</Link>
              <Link to="/app/admin">Admin</Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm text-neutral-700">{user?.name}</div>
            <button onClick={() => dispatch(logout())} className="text-sm text-danger">Sign out</button>
          </div>
        </header>

        <main className="py-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
