import React from 'react'
export default function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center px-4 py-2 bg-primary-500 text-white rounded-md text-sm disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  )
}
