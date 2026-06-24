import React from 'react'

export default function Input({ label, type = 'text', className = '', ...rest }) {
  return (
    <label className="block">
      {label && <div className="text-sm mb-1 text-neutral-700">{label}</div>}
      <input
        type={type}
        className={`w-full px-3 py-2 border rounded-md text-sm bg-white ${className}`}
        {...rest}
      />
    </label>
  )
}
