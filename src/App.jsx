import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout.jsx'
import AppLayout from './layouts/AppLayout.jsx'
import Home from './pages/public/Home.jsx'
import Login from './features/auth/Login.jsx'
import Register from './features/auth/Register.jsx'
import ParentDashboard from './features/parent/ParentDashboard.jsx'
import DriverDashboard from './features/driver/DriverDashboard.jsx'
import AdminDashboard from './features/admin/AdminDashboard.jsx'
import useAuth from './hooks/useAuth.jsx'

function ProtectedRoute({ children, roles = [] }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  if (roles.length && !roles.includes(user.role)) return <Navigate to="/" replace />
  return children
}

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      <Route path="/app" element={<AppLayout />}>
        <Route
          path="parent"
          element={
            <ProtectedRoute roles={[ 'parent' ]}>
              <ParentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="driver"
          element={
            <ProtectedRoute roles={[ 'driver' ]}>
              <DriverDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin"
          element={
            <ProtectedRoute roles={[ 'admin' ]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
