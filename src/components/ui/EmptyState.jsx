import React from 'react'
export default function EmptyState({ title = 'No data', subtitle = '' }) {
  return (
    <div className="text-center py-12">
      <div className="text-lg font-semibold">{title}</div>
      {subtitle && <div className="text-sm mt-2 text-neutral-500">{subtitle}</div>}
    </div>
  )
}
